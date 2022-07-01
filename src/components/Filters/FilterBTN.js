import React from "react";

const FilterBTN = ({ input, index, name }) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
