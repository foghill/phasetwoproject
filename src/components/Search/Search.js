import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        //anything we type in the input will trigger the setSearch function and be stored in the search state
        onChange={(e) => {
          //when we filter the results, we want to reset the page number to 1
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        type="text"
        className={styles.input}
      />
      <button className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  );
};

export default Search;
