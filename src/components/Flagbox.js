import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

function FlagBox(props) {
  const { selectedCountry } = props;
  return (
    <div className="flag-box border h-[14rem] w-full ml-1">
      <img
        className="rounded-lg h-[15rem] w-[20rem]"
        src={selectedCountry[0].flags.png}
        alt="new"
      />
    </div>
  );
}

export default FlagBox;
