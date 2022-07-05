import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [id, setId] = useState(1);
  let [results, setResults] = useState([]);
  let { air_date, episode, name } = episodes;
  const API = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(API).then((res) => res.json());
      setEpisodes(data);

      //map character data
      let charData = await Promise.all(
        data.characters.map((char) => {
          return fetch(char).then((res) => res.json());
        })
      );
      setResults(charData);
    })();
  }, [API]);

  return (
    <div className="container">
      <div className="row mb-3">
        {/*get episode and airdate*/}
        {/*sometimes there is no air date or episode from API so use ternary*/}
        <h1 className="text-center mb-4">
          Episode :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center mb-4">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row"></div>
      <div className="col-lg-3 col-12 mb-4"></div>
      <h4 className="text-center mb-4">Pick Episodes</h4>
      <div className="col-lg-8 col-12">
        <div className="row">
          <Cards results={results} />
        </div>
      </div>
    </div>
  );
};

export default Episodes;
