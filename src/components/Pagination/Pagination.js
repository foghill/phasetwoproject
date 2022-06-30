import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  //   let next = () => {
  //     setPageNumber((prev) => prev + 1);
  //   };
  //   let prev = () => {
  //     if (pageNumber === 1) return;
  //     setPageNumber((prev) => prev - 1);
  //   };

  //   return (
  //     <div className="container d-flex justify-content-center gap-5 my-5">
  //       <button className="btn btn-primary" onClick={prev}>
  //         Previous
  //       </button>
  //       <button className="btn btn-primary" onClick={next}>
  //         Next
  //       </button>
  //     </div>
  //   );
  // };
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      nextClassName="btn btn-primary"
      previousLabel="Previous"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
}; //end of Pagination

export default Pagination;
