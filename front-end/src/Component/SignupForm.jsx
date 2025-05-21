import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Validate username and email uniqueness
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (user) =>
        user.username.toLowerCase() === formData.username.toLowerCase() ||
        user.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (existingUser) {
      setError("Username or Email already exists!");
      return;
    }

    
    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");

    
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
          required
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={formData.confirmPassword}
          required
          className="w-full p-2 border mb-4 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
