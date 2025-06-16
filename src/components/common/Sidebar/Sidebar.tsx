import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-52 bg-gray-300 text-black h-full flex-shrink-0">
      <div className="p-4 min-h-screen">
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/dashboard" className="hover:underline block py-2 px-4 rounded hover:bg-gray-400 transition-colors">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </aside>
  );
};

export default Sidebar;
