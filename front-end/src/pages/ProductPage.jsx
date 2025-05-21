import { useState, useEffect } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const tableHeaders = ["Title", "Price", "Category", "Actions"];

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {tableHeaders.map((header) => (
              <th key={header} className="border p-2 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border p-2">{product.title}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2">
                <button
                  onClick={() => alert(JSON.stringify(product, null, 2))}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
