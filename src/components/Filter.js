import React, { useEffect, useState } from "react";
import downArrowLogo from "./downArrow.svg";
function Filter(props) {
  const { category, handlerFunction } = props;
  return (
    <div className="dropdown mt-7 w-[12.5rem] md:w-[14rem]">
      <label
        tabindex="0"
        className="btn bg-[#2b3945] flex space-x-2 justify-center items-center"
      >
        <div>Filter By Region</div>
        <img className="h-5 w-5" src={downArrowLogo} alt="downarrow" />
      </label>
      <ul
        tabindex="0"
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {category.map((items) => (
          <li>
            <button value={items} onClick={handlerFunction}>
              {items.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
