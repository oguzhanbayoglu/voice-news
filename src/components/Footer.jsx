import React from "react";
import logo from "../img/logo.png";

function Footer() {
  return (
    <footer className="h-20 shrink-0 flex gap-4 items-center text-[.75rem]">
      <img src={logo} alt="logo" className="h-4 opacity-50" /> Oguzhan Bayoglu
      2024 ©
    </footer>
  );
}

export default Footer;
