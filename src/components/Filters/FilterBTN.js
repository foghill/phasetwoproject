import React from "react";

const FilterBTN = () => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="btn btn-outline-primary" for="flexradioDefault1">
          Single Toggle
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
