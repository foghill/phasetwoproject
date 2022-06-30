import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";

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
    <div>
      <Button variant="contained" onClick={getCharacters}>
        Fetch Characters
      </Button>
    </div>
  );
}

export default App;
