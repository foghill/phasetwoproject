import React from "react";
import styles from "./Cards.module.scss";

const Cards = ({ results }) => {
  console.log(results);
  let display;
  //if there is data in results, then run the following function
  if (results) {
    display = results.map((result) => {
      //destructure result for key
      let { id, name, image, location, status } = result;
      return (
        <div key={id} className="col-4 position-relative">
          <div className={styles.cards}>
            <img src={image} alt="" className="img-fluid" />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last location</div>
                <div className="fs-5"></div>
                {location.name}
              </div>
            </div>
          </div>
          <div className={`${styles.badge} position-absolute badge bd-danger`}>
            {status}
          </div>
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <div>{display}</div>;
};
export default Cards;
