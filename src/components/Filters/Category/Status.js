import React from "react";
import FilterBTN from "../FilterBTN";

const Status = () => {
  let status = ["Alive", "Dead", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {status.map((item, index) => {
            return (
              <FilterBTN key={index} name={item} type="status" value={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Status;
