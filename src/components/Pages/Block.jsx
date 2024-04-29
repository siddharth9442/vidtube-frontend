import React from "react";

const Block = ({ title, count = 0, className = "", ...props }) => {
  return (
    <div
      className={` ${className} h-40 bg-purple-400 flex flex-col text-center border border-black m-2 p-2 rounded-lg justify-center cursor-pointer hover:bg-purple-300`}
    >
      <p> {title} </p>
      <span> Total: {count} </span>
    </div>
  );
};

export default Block;
