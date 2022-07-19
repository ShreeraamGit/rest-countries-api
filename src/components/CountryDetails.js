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
import BackButton from "./BackButton";
import FlagBox from "./Flagbox";
import DetailsContentBox from "./DetailsContentBox";
import BorderDetailsBox from "./BorderDetailsBox";

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
      <Link to="/" className="pl-6">
        <BackButton></BackButton>
      </Link>
      <div className="container mt-10 flex flex-col justify-center items-center pl-6 pr-7">
        <FlagBox selectedCountry={selectedCountry}></FlagBox>
        <div className="details-box h-fit w-full mt-14">
          <DetailsContentBox
            selectedCountry={selectedCountry}
          ></DetailsContentBox>
          <div className="border-countriesbox mt-10">
            <BorderDetailsBox
              selectedCountry={selectedCountry}
              borderButtonHandler={borderButtonHandler}
              bordeVal={borderVal}
            ></BorderDetailsBox>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryDetails;
