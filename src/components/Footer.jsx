import React from "react";

function Footer() {
  return (
    <footer className="h-20 shrink-0 flex  items-center">
      Voice control powered by{" "}
      <span className="underline hover:text-white mx-1">
        <a href="https://alan.app/" target="_blank">
          Alan AI
        </a>
      </span>{" "}
      - Oguzhan Bayoglu 2022
    </footer>
  );
}

export default Footer;
