import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import CountryComponent from "./CountrieComponent";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";

function MainPage(props) {
  const categories = ["All", "Africa", "Americas", "Europe", "Asia", "Oceania"];
  const { countries } = props;
  const [list, setList] = useState(countries);
  const [val, setVal] = useState("");

  const handleTrack = () => {
    if (val.length !== 0) {
      console.log("got this:", val);
    }
  };
  const captureValue = (e) => {
    setVal(
      e.target.value.charAt(0).toUpperCase() +
        e.target.value.slice(1).toLowerCase()
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleTrack();
      setList(countries.filter((item) => item.name.common === val));
      setVal("");
    }
  };

  function filterButtonHandler(e) {
    let filterValue = e.target.value;
    //console.log(filterValue);
    if (filterValue !== "All") {
      const filteredList = countries.filter(
        (items) => items.region === filterValue
      );
      //console.log(filteredList);
      setList(filteredList);
    } else {
      setList(countries);
      //console.log(countries);
    }
  }

  return (
    <main className="bg-[#202c37] min-h-screen w-screen">
      <NavBar></NavBar>
      <div className="flex flex-col mr-5 ml-5 md:ml-10 md:mr-10 md:flex-row justify-start items-start md:justify-between md:items-start">
        <SearchBar
          handleKeyPress={handleKeyPress}
          handleTrack={handleTrack}
          val={val}
          setVal={setVal}
          captureValue={captureValue}
        ></SearchBar>
        <Filter
          category={categories}
          handlerFunction={filterButtonHandler}
        ></Filter>
      </div>
      <CountryComponent countriesList={list}></CountryComponent>
    </main>
  );
}

export default MainPage;
