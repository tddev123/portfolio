import React from "react";
import Nav from "./Nav";

export const Headerr = () => {
  return (
    <header className=""z-30 sticky top-0 mx-auto flex w-screen  bg-white flex-wrap items-center justify-between p-3 font-sans font-bold uppercase text-text-primary dark:text-d-text-primary">
      <a href="/">
        <h1 className="text-xl">Tyler Altenburg</h1>
      </a>
      <div className="flex-grow flex justify-end">
        <Nav />
      </div>
    </header>
  );
};

export default Headerr;


