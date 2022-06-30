import React from "react";

const Pagination = ({ pageNumber, setPageNumber }) => {
  let next = () => {
    setPageNumber((prev) => prev + 1);
  };
  let prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((prev) => prev - 1);
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button className="btn btn-primary" onClick={prev}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
