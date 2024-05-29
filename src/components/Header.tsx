import React from "react";
import { Nav } from "./Nav";

export const Headerr = () => {
  return (
    <header className=" z-30  sticky top-0  mx-auto  flex w-full max-w-7xl bg-white flex-wrap items-center justify-between border-b border-gray-100 bg-background p-5 font-sans font-bold uppercase text-text-primary dark:border-gray-800  dark:text-d-text-primary">
      <h1 className="text-xl">Tyler Altenburg</h1>

      <Nav />
    </header>
  );
};

export default Headerr;
