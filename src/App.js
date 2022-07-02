import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

function App() {
  //state to hold page number (default is 1)
  const [pageNumber, setPageNumber] = useState(1);
  //state to hold search term (default is empty string)
  const [search, setSearch] = useState("");
  //state to hold character information

  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

  const [fetchedData, updateFetchedData] = useState([]);
  //destructure Object - results go into Cards. Info will go to Pagination
  let { info, results } = fetchedData;
  //store API link in API variable for cleaner code
  const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

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
      <Navbar />
      <h1 className="text-center my-4 ubuntu">
        Rick and Morty <span className="text-primary">Wiki</span>
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
            pageNumber={pageNumber}
            status={status}
            gender={gender}
            species={species}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
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
