import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

function BackButton() {
  return (
    <button className="text-xl rounded-md mt-10 p-2 w-[6.7rem] bg-[#2b3945]">
      {" "}
      ← Back
    </button>
  );
}

export default BackButton;
