import React from "react";

const RightPanel = () => {
  return (
    <div className="bg-gray-600 text-white py-4 px-6 flex flex-col h-screen">
      <h1 className="text-xl font-bold mb-4">VidTube</h1>
      <ul className="flex flex-col space-y-2 py-8">
        <li className="cursor-pointer hover:bg-gray-800 px-4 py-2 rounded">
          Home
        </li>
        <li className="cursor-pointer hover:bg-gray-800 px-4 py-2 rounded">
          Trending
        </li>
        <li className="cursor-pointer hover:bg-gray-800 px-4 py-2 rounded">
          Subscriptions
        </li>
        <li className="cursor-pointer hover:bg-gray-800 px-4 py-2 rounded">
          Library
        </li>
      </ul>
    </div>
  );
};

export default RightPanel;
