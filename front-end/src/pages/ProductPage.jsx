import { useState, useEffect } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: "", price: "", description: "", category: "" });
  const [search, setSearch] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("All");

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    const newProducts = [...products, form];
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
    setForm({ title: "", price: "", description: "", category: "" });
  };

  const handleDelete = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (filteredCategory === "All" || product.category === filteredCategory)
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <select
          value={filteredCategory}
          onChange={(e) => setFilteredCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option>All</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Books</option>
        </select>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border p-2">{product.title}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">{product.description}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => alert(JSON.stringify(product))}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Add Product</h2>
        <div className="grid grid-cols-4 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
