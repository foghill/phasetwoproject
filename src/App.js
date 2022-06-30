import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Axios from "axios";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  // make an API request every time the page number changes
  useEffect(() => {
    //use IIFE or Axios
    (async function () {
      let data = await fetch(API).then((res) => res.json());
      console.log(data);
    })();
  }, [API]);

  return (
    <div className="App">
      <h1 className="text-center my-4 ubuntu">
        Rick and Morty <span className="text-primary">Wiki</span>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
