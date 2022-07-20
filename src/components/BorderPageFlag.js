import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

function BorderPageFlag(props) {
  const { selectedBoundaryNew } = props;
  return (
    <div className="flag-box border h-[14rem] w-full ml-1 md:mt-10">
      <img
        className="rounded-lg h-[15rem] w-[20rem] md:h-[20rem] md:w-[26rem] xl:h-[21.5rem] xl:w-[32.5rem]"
        src={selectedBoundaryNew.flags.png}
        alt="new"
      />
    </div>
  );
}

export default BorderPageFlag;
