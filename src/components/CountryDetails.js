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
      <div className="md:pl-10 md:pr-10 pl-6 pr-7 xl:pl-14 xl:pr-14">
        <Link to="/" className="">
          <BackButton></BackButton>
        </Link>
        <div className="container mt-10 flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start">
          <FlagBox selectedCountry={selectedCountry}></FlagBox>
          <div className="details-box h-fit w-full mt-14 md:mt-10">
            <DetailsContentBox
              selectedCountry={selectedCountry}
            ></DetailsContentBox>
            <div className="border-countriesbox mt-10 md:mt-5">
              <BorderDetailsBox
                selectedCountry={selectedCountry}
                borderButtonHandler={borderButtonHandler}
                bordeVal={borderVal}
              ></BorderDetailsBox>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryDetails;
