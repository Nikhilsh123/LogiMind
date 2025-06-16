import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/DashboardPage/Dashboard";
import Register from "./components/RegisterPage/Register";
import Login from "./components/LoginPage/Login";
import Header from "./components/common/Header/Header";
import Sidebar from "./components/common/Sidebar/Sidebar";
import "./index.css";

// App component
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  useEffect(() => {
    const authState = localStorage.getItem("isAuthenticated");
    if (authState === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
  };

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Header onLogout={handleLogout} />}
        <div className="main-layout">
          {isAuthenticated && <Sidebar />}
          <div className="content">
            <Routes>
              <Route path="/" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
