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
    <header className="flex justify-end p-4 bg-gray-800 text-white">
      <div className="relative">
        <button onClick={toggleMenu} className="text-xl">&#x22EE;</button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded">
            <button onClick={() => alert("My Profile")} className="block px-4 py-2 hover:bg-gray-200">My Profile</button>
            <button onClick={onLogout} className="block px-4 py-2 hover:bg-gray-200">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
