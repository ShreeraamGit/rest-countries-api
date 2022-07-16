import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  Outlet,
} from "react-router-dom";

function Borders(props) {
  const { countries, borderButtonHandler, borderVal } = props;

  useEffect(() => {
    ///console.log(borderVal);
  }, [borderVal]);

  /*const selectedBoundary = countries.filter(
    (items) => items.cca3 === borderVal
  );*/

  const selectedBoundaryNew = countries.find(
    (items) => items.cca3 === borderVal
  );

  ////console.log(selectedBoundaryNew.flag);

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
            src={selectedBoundaryNew.flags.png}
            alt="new"
          />
        </div>
        <div className="details-box h-fit w-full mt-10">
          <h1 className="font-bold text-2xl">
            {selectedBoundaryNew.name.common}
          </h1>
          <div className="innerdetails mt-5">
            <h3 className="mb-2">
              Native Name : {selectedBoundaryNew.name.official}
            </h3>
            <h3 className="mb-2">
              Population :{" "}
              {selectedBoundaryNew.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h3>
            <h3 className="mb-2">Region : {selectedBoundaryNew.region}</h3>
            <h3 className="mb-2">
              Sub-Region : {selectedBoundaryNew.subregion}
            </h3>
            <h3 className="mb-2">Capital : {selectedBoundaryNew.capital} </h3>
            <div className="secondarydetails mt-10">
              <h3 className="mb-2">
                Top-Level Domain : {selectedBoundaryNew.tld}{" "}
              </h3>
              <h3 className="mb-2">
                Currencies :{" "}
                {Object.values(selectedBoundaryNew.currencies)[0].name}{" "}
              </h3>
              <h3 className="mb-2">
                Languages :{" "}
                {Object.values(selectedBoundaryNew.languages).join(" , ")}{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="border-countriesbox mt-10">
          <h1 className="text-lg">Borders Countries :</h1>
          <div className="border-container border h-fit w-full flex flex-row flex-wrap mt-4 space-x-1">
            {selectedBoundaryNew.borders ? (
              selectedBoundaryNew.borders.map((items) => (
                <button className="p-2 mb-8 px-6 bg-[#2b3945] rounded-[0.4rem]">
                  {items}
                </button>
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

export default Borders;