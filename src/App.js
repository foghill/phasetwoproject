import React, { useState, useEffect } from "react";
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
    <>
      <h1>Rick and Morty</h1>
    </>
  );
}

export default App;
