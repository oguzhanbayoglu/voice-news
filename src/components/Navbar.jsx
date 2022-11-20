import React from "react";
import logo from "../img/logo.png";

function Navbar() {
  return (
    <div className="w-full border-gray-600 border-solid border-b-[1px] flex  justify-between items-center h-[7rem] sticky top-0 z-20 backdrop-blur-xl bg-[#2a303cb2] ">
      <h1 className="text-[4rem] font-black m-4 ml-8">NEWS</h1>
      <div className=" border-gray-600 border-solid border-l-[1px] flex  justify-center items-center h-full w-[7rem]">
        <img src={logo} alt="logo" className="h-12 opacity-50" />
      </div>
    </div>
  );
}

export default Navbar;
