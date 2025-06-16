import React, { useState } from "react";

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Menu clicked, current state:', menuOpen);
    setMenuOpen((prev) => !prev);
  };


  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <header className="relative flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white h-16 flex-shrink-0 shadow-lg border-b border-blue-700">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-3">
        <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 rounded-lg shadow-md">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z" />
            <path d="M12 12a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z" />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-bold">LogiMind</h1>
          <p className="text-xs text-blue-200">Smart Logistics</p>
        </div>
      </div>

      {/* User Menu */}
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-3 text-white hover:bg-blue-700/50 p-2 rounded-lg transition-colors duration-200"
        >
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">{user.username || "User"}</p>
            <p className="text-xs text-blue-200">{user.companyName || "Company"}</p>
          </div>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <svg className="w-4 h-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {menuOpen && (
          <div
            className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-[9999]"
          // style={{ backgroundColor: 'white', }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-800">{user?.username || "User"}</p>
              <p className="text-xs text-gray-600">{user.email || "user@company.com"}</p>
              <p className="text-xs text-blue-600 font-medium">{user.companyName || "Company Name"}</p>
            </div>

            <div className="py-2">
              <button
                onClick={() => alert("My Profile")}
                className="flex items-center w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
              >
                <svg className="w-4 h-4 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                My Profile
              </button>

              <button
                onClick={() => alert("Settings")}
                className="flex items-center w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
              >
                <svg className="w-4 h-4 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </button>

              <div className="border-t border-gray-100 mt-2 pt-2">
                <button
                  onClick={onLogout}
                  className="flex items-center w-full text-left px-4 py-3 hover:bg-red-50 transition-colors text-red-600"
                >
                  <svg className="w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
