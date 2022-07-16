import React, { useEffect, useState } from "react";
import { searchLogo } from "../search.svg";

function SearchBar(props) {
  const { val, setVal, captureValue, handleKeyPress } = props;
  return (
    <div className="mt-7 w-full md:w-[23rem]">
      <input
        className="bg-[#2b3945] p-5 rounded-lg h-12 w-full flex flex-row items-center justify-center"
        placeholder="Search for a Country"
        value={val}
        onChange={captureValue}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default SearchBar;
