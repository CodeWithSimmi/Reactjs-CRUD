import React, { useState } from "react";

const Profile = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", price: 100, description: "Description 1", category: "Category 1" },
    { id: 2, title: "Product 2", price: 200, description: "Description 2", category: "Category 2" },
    { id: 3, title: "Product 3", price: 300, description: "Description 3", category: "Category 3" },
  ]);

  const handleView = (product) => {
    alert(`
      Title: ${product.title}
      Price: ${product.price}
      Description: ${product.description}
      Category: ${product.category}
    `);
  };

  const handleUpdate = (id) => {
    const newTitle = prompt("Enter new title:");
    if (newTitle) {
      const updatedProducts = products.map((product) =>
        product.id === id ? { ...product, title: newTitle } : product
      );
      setProducts(updatedProducts);
      console.log("Updated Product:", updatedProducts.find((p) => p.id === id));
    }
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    alert("Product deleted successfully.");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-700">
        Product Table
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left text-xs md:text-sm text-gray-600">Title</th>
              <th className="px-4 py-2 text-left text-xs md:text-sm text-gray-600">Price</th>
              <th className="px-4 py-2 text-left text-xs md:text-sm text-gray-600">Description</th>
              <th className="px-4 py-2 text-left text-xs md:text-sm text-gray-600">Category</th>
              <th className="px-4 py-2 text-center text-xs md:text-sm text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } hover:bg-gray-200`}
              >
                <td className="px-4 py-2 text-xs md:text-sm text-gray-700">{product.title}</td>
                <td className="px-4 py-2 text-xs md:text-sm text-gray-700">{product.price}</td>
                <td className="px-4 py-2 text-xs md:text-sm text-gray-700">{product.description}</td>
                <td className="px-4 py-2 text-xs md:text-sm text-gray-700">{product.category}</td>
                <td className="px-4 py-2 flex flex-col md:flex-row gap-2 justify-center">
                  <button
                    onClick={() => handleView(product)}
                    className="w-full md:w-auto px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-xs md:text-sm"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleUpdate(product.id)}
                    className="w-full md:w-auto px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 text-xs md:text-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="w-full md:w-auto px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-xs md:text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
