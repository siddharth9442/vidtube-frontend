import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="bg-red-400 ">
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link>Contact</Link>
          <Link>Other</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
