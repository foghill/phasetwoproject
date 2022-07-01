import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  //state to hold page number (default is 1)
  const [pageNumber, setPageNumber] = useState(1);
  //state to hold search term (default is empty string)
  const [search, setSearch] = useState("");
  //state to hold character information
  const [fetchedData, updateFetchedData] = useState([]);
  //destructure Object - results go into Cards. Info will go to Pagination
  let { info, results } = fetchedData;
  //store API link in API variable for cleaner code
  const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

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
      <h1 className="text-center my-4 Ubuntu">
        Rick and Morty <span className="text-primary">Wiki</span>
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters />
          <div className="col-lg-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
