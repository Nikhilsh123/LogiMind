import React from "react";

const Dashboard = () => {
  console.log("Dashboard component is rendering");

  return (
    <div className="text-gray-800 p-4 rounded-lg shadow-sm h-full max-h-full overflow-hidden">
      <h1 className="text-2xl font-bold mb-4 text-left">🚀 Logistics Dashboard</h1>
      <p className="text-base text-left mb-6">Welcome to the AI-powered logistics dashboard!</p>

      {/* Dashboard content area */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto max-h-[calc(100%-120px)] overflow-hidden">
        <div className="bg-blue-50 p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Total Shipments</h3>
          <p className="text-2xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Delivered</h3>
          <p className="text-2xl font-bold text-green-600">1,180</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">In Transit</h3>
          <p className="text-2xl font-bold text-yellow-600">54</p>
        </div>
      </div>

      {/* Add charts, tables, and AI features here */}
    </div>
  );
};

export default Dashboard;
