import React, { useState, useEffect } from "react";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [id, setId] = useState(1);
  const API = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    //use IIFE or Axios
    (async function () {
      let data = await fetch(API).then((res) => res.json());
      setEpisodes(data);
      console.log(data);
    })();
  }, [API]);

  return <div>Episodes are here</div>;
};

export default Episodes;
