import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Axios from "axios";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";

function App() {
  const [data, setData] = React.useState([]);
  const getCharacters = () => {
    Axios.get("https://rickandmortyapi.com/api/character/").then((data) => {
      console.log(data);
      setData(data);
    });
  };

  useEffect(() => {
    getCharacters();
  }, []);

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
