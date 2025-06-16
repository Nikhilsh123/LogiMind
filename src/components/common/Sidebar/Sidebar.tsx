import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
