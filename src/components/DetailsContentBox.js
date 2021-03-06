import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

function DetailsContentBox(props) {
  const { selectedCountry } = props;
  return (
    <div className="lg:text-xl flex flex-col justify-start items-start md:flex-row md:space-x-9">
      <div className="primarydetails">
        <h1 className="font-bold lg:text-4xl">
          {selectedCountry[0].name.common}
        </h1>
        <div className="primarydetails-1 mt-5">
          <h3 className="mb-2">
            <span className="">Native Name :</span>{" "}
            {selectedCountry[0].name.official}
          </h3>
          <h3 className="mb-2">
            Population :{" "}
            {selectedCountry[0].population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h3>
          <h3 className="mb-2">Region : {selectedCountry[0].region}</h3>
          <h3 className="mb-2">Sub-Region : {selectedCountry[0].subregion}</h3>
          <h3 className="mb-2">Capital : {selectedCountry[0].capital} </h3>
        </div>
      </div>
      <div className="secondarydetails mt-10 md:mt-12 lg:mt-14">
        <h3 className="mb-2">Top-Level Domain : {selectedCountry[0].tld} </h3>
        <h3 className="mb-2">
          Currencies : {Object.values(selectedCountry[0].currencies)[0].name}{" "}
        </h3>
        <h3 className="mb-2">
          Languages : {Object.values(selectedCountry[0].languages).join(" , ")}{" "}
        </h3>
      </div>
    </div>
  );
}

export default DetailsContentBox;
