import React from "react";

export const Nav = () => {
  return (
    <nav className="w-1/3">
      <div className="flex space-x-5">
        <a href="/"> Home </a>
        <a href="/About"> About </a>
        <a href="/Projects"> Projects </a>
        <a href="/Contact"> Contact </a>
      </div>
    </nav>
  );
};
