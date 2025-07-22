import React from "react";

function Lobby({ user }) {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-2">Welcome, {user?.first_name}!</h1>
      <p className="text-sm text-gray-400 mb-6">Prepare your deck for battle...</p>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <button className="bg-gray-800 border border-yellow-500 p-4 rounded-xl">Profile</button>
        <button className="bg-gray-800 border border-yellow-500 p-4 rounded-xl">Summon</button>
        <button className="bg-gray-800 border border-yellow-500 p-4 rounded-xl">Inventory</button>
        <button className="bg-gray-800 border border-yellow-500 p-4 rounded-xl" disabled>Battle</button>
      </div>
    </div>
  );
}

export default Lobby;