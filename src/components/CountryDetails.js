import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";
import NavBar from "./NavBar";
import { v4 as uuidv4 } from "uuid";

function CountryDetails(props) {
  const { countries, borderButtonHandler, borderVal } = props;
  //console.log(countries);
  const { countryName } = useParams();
  ///console.log(countryName);

  const selectedCountry = countries.filter(
    (items) => items.name.common === countryName
  );

  ///console.log(selectedCountry[0].borders ? true : false);

  return (
    <main className="bg-[#202c37] min-h-screen w-screen text-white">
      <NavBar></NavBar>
      <Link to="/" className="">
        <button className="rounded-md mt-10 ml-5 p-2 w-[6.7rem] bg-[#2b3945]">
          {" "}
          ← Back
        </button>
      </Link>
      <div className="container mt-10 ml-5">
        <div className="flag-box border h-[14rem] w-full">
          <img
            className="rounded-lg h-[15rem] w-[20.5rem]"
            src={selectedCountry[0].flags.png}
            alt="new"
          />
        </div>
        <div className="details-box h-fit w-full mt-10">
          <h1 className="font-bold text-2xl">
            {selectedCountry[0].name.common}
          </h1>
          <div className="innerdetails mt-5">
            <h3 className="mb-2">
              Native Name : {selectedCountry[0].name.official}
            </h3>
            <h3 className="mb-2">
              Population :{" "}
              {selectedCountry[0].population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h3>
            <h3 className="mb-2">Region : {selectedCountry[0].region}</h3>
            <h3 className="mb-2">
              Sub-Region : {selectedCountry[0].subregion}
            </h3>
            <h3 className="mb-2">Capital : {selectedCountry[0].capital} </h3>
            <div className="secondarydetails mt-10">
              <h3 className="mb-2">
                Top-Level Domain : {selectedCountry[0].tld}{" "}
              </h3>
              <h3 className="mb-2">
                Currencies :{" "}
                {Object.values(selectedCountry[0].currencies)[0].name}{" "}
              </h3>
              <h3 className="mb-2">
                Languages :{" "}
                {Object.values(selectedCountry[0].languages).join(" , ")}{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="border-countriesbox mt-10">
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
      </div>
    </main>
  );
}

export default CountryDetails;
