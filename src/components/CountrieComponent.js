import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";

function CountriesComponent(props) {
  const { countriesList } = props;

  //console.log(countriesList.filter((items) => items.region === "Africa"));

  return (
    <div className="text-white md:ml-5 md:mr-5 mt-10 flex flex-col md:flex-row md:flex-wrap  justify-center items-center">
      {countriesList.map((items) => (
        <Link to={`${items.name.common}`}>
          <div
            key={items.name.common}
            className="main-box h-[28rem] w-[20rem] md:w-[17rem] md:mr-2"
          >
            <div className="image-box">
              <img
                className="rounded-t-lg h-[13rem] w-[20rem] flex justify-center items-center"
                src={items.flags.png}
                alt="new"
              />
            </div>
            <div className="detail-box p-5 bg-[#2b3945] rounded-b-lg">
              <h1 className="mb-7 font-bold">{items.name.common}</h1>
              <p className="mb-3">
                Population :{" "}
                {items.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <p className="mb-3">Region : {items.region}</p>
              <p className="mb-3">Capital : {items.capital}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CountriesComponent;
