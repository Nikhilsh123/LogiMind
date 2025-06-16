import React, { useState } from "react";

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white h-16 flex-shrink-0">
      <h1 className="text-xl font-bold">LogiMind</h1>
      <div className="relative">
        <button onClick={toggleMenu} className="text-xl hover:bg-gray-700 p-2 rounded">&#x22EE;</button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md border">
            <button onClick={() => alert("My Profile")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">My Profile</button>
            <button onClick={onLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
