import React, { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import CountryDetails from "./components/CountryDetails";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Borders from "./components/BordersPage";
import InnerBorderPage from "./components/InnerBorderPage";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [borderVal, setborderVal] = useState("");
  const [innerBorderVal, setInnerBorderVal] = useState("");

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  //console.log(items[15].cca3);

  const borderButtonHandler = (e) => {
    e.currentTarget.disabled = true;
    const pressedBorder = e.target.value;
    setborderVal(pressedBorder);
  };

  const innerBorderButtonHandler = (e) => {
    const pressedInnerBorder = e.target.value;
    setInnerBorderVal(pressedInnerBorder);
  };

  useEffect(() => {
    ///console.log(borderVal);
  }, [borderVal]);

  useEffect(() => {
    //console.log(innerBorderVal);
  }, [innerBorderVal]);

  if (error) {
    return <div>There is Error loading: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <body className="bg-[#202c37] h-screen w-screen">
        <div className="text-white">Page loading Please Wait....</div>
      </body>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage countries={items}></MainPage>} />
          <Route
            path="/:countryName"
            element={
              <CountryDetails
                countries={items}
                borderButtonHandler={borderButtonHandler}
                borderVal={borderVal}
              ></CountryDetails>
            }
          ></Route>
          <Route
            path="/:countryName/:borderName"
            element={
              <Borders
                countries={items}
                innerBorderButtonHandler={innerBorderButtonHandler}
                borderVal={borderVal}
                innerBorderVal={innerBorderVal}
              ></Borders>
            }
          ></Route>
          <Route
            path="/:countryName/:borderName/:innerBorderId"
            element={
              <InnerBorderPage
                countries={items}
                innerBorderButtonHandler={innerBorderButtonHandler}
                borderVal={innerBorderVal}
              ></InnerBorderPage>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
