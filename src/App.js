import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Axios from "axios";

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
      <h1 className="text-center ubuntu my-4">
        Rick and Morty <span className="text-primary">Wiki</span>
      </h1>
      <div className="container">
        <div className="row"></div>
        <div className="col-3"></div>
        <div className="col-8"></div>
      </div>
    </div>
  );
}

export default App;
