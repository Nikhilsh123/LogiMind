import React, { useState } from "react";
import "./Header.css";

interface HeaderProps {
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="menu-icon" onClick={toggleMenu}>
                &#x22EE;
            </div>
            {menuOpen && (
                <div className="dropdown-menu">
                    <button onClick={() => alert("My Profile")}>My Profile</button>
                    <button onClick={onLogout}>Logout</button>
                </div>
            )}
        </header>
    );
};

export default Header;
