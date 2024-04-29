import React from "react";
import Input from "../Input/Input";

const SearchBar = () => {
  return (
    <div className="flex bg-gray-600 py-4 px-6 gap-x-8 item-center">
      <Input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
