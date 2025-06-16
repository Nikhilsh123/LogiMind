import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState(""); // Replace username with email
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Add useNavigate hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Use email instead of username
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user details in localStorage
        onLogin(); // Call onLogin on successful login
        navigate("/dashboard"); // Navigate to dashboard
      } else {
        setMessage(data.message || "Login failed.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
      {message && <p className="text-red-500 mt-4">{message}</p>}
      <p className="mt-4">
        Don't have an account? <Link to="/register" className="text-blue-500">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
