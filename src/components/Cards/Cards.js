import React from "react";

const Cards = ({ results }) => {
  console.log(results);
  let display;
  //if there is data in results, then run the following function
  if (results) {
    display = results.map((result) => {
      //destructure result for key
      let { id, name } = result;
      return (
        <div key={id} className="col-4">
          {name}
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <div>{display}</div>;
};
export default Cards;
