import React, { useEffect, useState } from "react";

const API_BASE = "https://fakestoreapi.com/products";

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [viewProduct, setViewProduct] = useState(null);
  const [updateProduct, setUpdateProduct] = useState(null);

  async function fetchProducts() {
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  async function fetchCategories() {
    try {
      const res = await fetch(`${API_BASE}/categories`);
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchText.trim()) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchText, selectedCategory, products]);

  const handleView = (product) => {
    setViewProduct(product);
  };

  const closeViewPopup = () => {
    setViewProduct(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this product?")) return;

    try {
      await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
      });
      alert("Deleted product with id: " + id);
      setProducts(products.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const startUpdate = (product) => {
    setUpdateProduct(product);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitUpdate = async (e) => {
    e.preventDefault();
    if (!updateProduct) return;

    try {
      const res = await fetch(`${API_BASE}/${updateProduct.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateProduct),
      });
      const data = await res.json();
      alert("Product updated: " + data.title);
      setProducts(products.map((p) => (p.id === data.id ? data : p)));
      setUpdateProduct(null);
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Product Table</h2>

      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search by title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 md:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow">
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="py-3 px-2 sm:px-4">Title</th>
              <th className="py-3 px-2 sm:px-4">Price ($)</th>
              <th className="hidden md:table-cell py-3 px-4">Description</th>
              <th className="py-3 px-2 sm:px-4">Category</th>
              <th className="py-3 px-2 sm:px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No products found.
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-2 sm:px-4 max-w-xs truncate">{product.title}</td>
                  <td className="py-3 px-2 sm:px-4">${product.price.toFixed(2)}</td>
                  <td className="hidden md:table-cell py-3 px-4 max-w-sm truncate">
                    {product.description.slice(0, 50)}...
                  </td>
                  <td className="py-3 px-2 sm:px-4 capitalize">{product.category}</td>
                  <td className="py-3 px-2 sm:px-4">
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleView(product)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                      >
                        View
                      </button>
                      <button
                        onClick={() => startUpdate(product)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

     
      {viewProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={closeViewPopup}
        >
          <div
            className="bg-white p-6 rounded-lg w-11/12 max-w-md shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">{viewProduct.title}</h3>
            <p className="mb-2">
              <b>Price:</b> ${viewProduct.price}
            </p>
            <p className="mb-2">
              <b>Description:</b> {viewProduct.description}
            </p>
            <p className="mb-4 capitalize">
              <b>Category:</b> {viewProduct.category}
            </p>
            <img
              src={viewProduct.image}
              alt={viewProduct.title}
              className="w-full h-48 object-contain mb-4"
            />
            <button
              onClick={closeViewPopup}
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Update Form Popup */}
      {updateProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
          onClick={() => setUpdateProduct(null)}
        >
          <form
            onSubmit={submitUpdate}
            className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative overflow-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">Update Product</h3>

            <label className="block mb-2">
              Title:
              <input
                type="text"
                name="title"
                value={updateProduct.title}
                onChange={handleUpdateChange}
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="block mb-2">
              Price:
              <input
                type="number"
                step="0.01"
                name="price"
                value={updateProduct.price}
                onChange={handleUpdateChange}
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="block mb-2">
              Description:
              <textarea
                name="description"
                value={updateProduct.description}
                onChange={handleUpdateChange}
                required
                rows={3}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </label>

            <label className="block mb-4">
              Category:
              <input
                type="text"
                name="category"
                value={updateProduct.category}
                onChange={handleUpdateChange}
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <div className="flex justify-end space-x-3">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setUpdateProduct(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProductTable;
