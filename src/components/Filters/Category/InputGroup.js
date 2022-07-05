import React from "react";

const InputGroup = ({ name, setId, total }) => {
  return (
    <div className="input-group mb-3">
      <select>
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
