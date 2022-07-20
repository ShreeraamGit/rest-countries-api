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
import { v4 as uuidv4 } from "uuid";
import BackButton from "./BackButton";
import BorderPageFlag from "./BorderPageFlag";
import BorderDetailsContentBox from "./BorderDetailsContentBox";

function Borders(props) {
  const { countries, innerBorderButtonHandler, borderVal, innerBorderVal } =
    props;

  useEffect(() => {
    ///console.log(borderVal);
  }, [borderVal]);

  const selectedBoundaryNew = countries.find(
    (items) => items.cca3 === borderVal
  );

  return (
    <main className="bg-[#202c37] min-h-screen w-screen text-white">
      <NavBar></NavBar>
      <div className="md:pl-10 md:pr-10 pl-6 pr-7 xl:pl-14 xl:pr-14">
        <Link to="/" className="">
          <BackButton></BackButton>
        </Link>
        <div className="container mt-10 flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start">
          <BorderPageFlag
            selectedBoundaryNew={selectedBoundaryNew}
          ></BorderPageFlag>
          <div className="details-box h-fit w-full mt-14 md:mt-10">
            <BorderDetailsContentBox
              selectedBoundaryNew={selectedBoundaryNew}
            ></BorderDetailsContentBox>
            <div className="border-countriesbox mt-10">
              <h1 className="text-lg">Borders Countries :</h1>
              <div className="border-container border h-fit w-full flex flex-row flex-wrap mt-4 space-x-1">
                {selectedBoundaryNew.borders ? (
                  selectedBoundaryNew.borders.map((items) => (
                    <Link key={uuidv4()} to={`${innerBorderVal}`}>
                      <button
                        key={uuidv4()}
                        value={items}
                        onClick={innerBorderButtonHandler}
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
        </div>
      </div>
      <div className=""></div>
    </main>
  );
}

export default Borders;
