import { current } from "daisyui/src/colors";
import React, { useEffect, useState } from "react";
import sun from "./sun.svg";
import moon from "./moon.svg";

function NavBar() {
  const [mode, setMode] = useState(true);

  function clickHandler() {
    setMode((current) => !current);
  }

  return (
    <nav className="border h-[5rem] md:h-[5rem] w-full bg-[#2b3945] flex flex-row items-center justify-between">
      <div className="ml-5 md:ml-10">
        <h1 className="font-semibold text-white text-base lg:text-2xl w-[13rem] md:w-[14rem]">
          Where in the World ?
        </h1>
      </div>
      <div className="flex flex-row justify-between space-x-2 md:space-x-4 mr-5 md:mr-10">
        <img
          className="h-7 w-7 md:h-8 md:w-8"
          src={mode ? sun : moon}
          alt="light mode"
        />
        <button
          onClick={clickHandler}
          className="text-white text-base md:text-2xl font-bold"
        >
          {mode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
