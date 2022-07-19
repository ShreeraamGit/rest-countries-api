import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function BorderDetailsBox(props) {
  const { borderButtonHandler, selectedCountry, borderVal } = props;
  return (
    <div className="flex flex-col">
      <h1 className="text-lg">Borders Countries :</h1>
      <div className="border-container border h-fit w-full flex flex-row flex-wrap mt-4 space-x-1">
        {selectedCountry[0].borders ? (
          selectedCountry[0].borders.map((items) => (
            <Link key={uuidv4()} to={`${borderVal}`}>
              <button
                value={items}
                onClick={borderButtonHandler}
                className="p-2 mb-8 px-6 bg-[#2b3945] rounded-[0.4rem]"
              >
                {items}
              </button>
            </Link>
          ))
        ) : (
          <div className="p-2 mb-8 px-6 bg-[#2b3945] rounded-[0.4rem]">
            No Borders Availaible
          </div>
        )}
      </div>
    </div>
  );
}

export default BorderDetailsBox;
