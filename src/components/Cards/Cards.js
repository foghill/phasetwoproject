import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const Cards = ({ results, page }) => {
  let display;
  //if there is data in results, then run the following function
  if (results) {
    display = results.map((result) => {
      //destructure result for key
      let { id, name, image, location, status } = result;
      return (
        <Link
          to={`${page}${id}`}
          key={id}
          className="col-4 mb-4 position-relative"
        >
          <div className={styles.cards}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last location</div>
                <div className="fs-5"></div>
                {location.name}
              </div>
            </div>
          </div>
          {/* use IIFE to run logic to determine badge color of Alive or Dead */}
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Cards;
