import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError(""); // Clear any previous error
    setLoading(true); // Show loading indicator

    try {
      const response = await fetch(
        "https://expressjs-backend-6h6x.onrender.com/cryptosignup/add",
        {
          method: "post",
          body: JSON.stringify({ username, email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/"); // Redirect after successful signup
      } else {
        setError(result.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Hide loading indicator
    }

    // Reset form fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col mt-8 gap-4 w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-gray-800 text-3xl font-semibold mb-2 text-center">
          Register
        </h1>
        {error && (
          <div className="text-red-500 text-sm font-medium bg-red-100 p-2 rounded">
            {error}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="rounded-md p-3 border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all"
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="rounded-md p-3 border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="rounded-md p-3 border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
