import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";

function App() {
  //state to hold page number (default is 1)
  const [pageNumber, setPageNumber] = useState(1);
  //state to hold character information
  const [fetchedData, updateFetchedData] = useState([]);
  //destructure Object - results go into Cards. Info will go to Pagination
  let { info, results } = fetchedData;
  //store API link in API variable for cleaner code
  const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  // make an API request and get fresh data every time the page number changes
  useEffect(() => {
    //use IIFE or Axios
    (async function () {
      let data = await fetch(API).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [API]);

  return (
    <div className="App">
      <h1 className="text-center my-4">
        Rick and Morty <span className="text-primary">Wiki</span>
      </h1>
      <div className="container">
        <div className="row">
          <Filters />
        </div>

        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
