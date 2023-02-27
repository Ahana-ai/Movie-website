import React, { useContext } from "react";
import { AppContext } from "../context";

const Search = () => {
  const { query, setQuery, isError } = useContext(AppContext);
  return (
    <>
      <section>
        <h2>Search your favourite movie</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <input
              type="text"
              placeholder="Search here"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
        </form>
        <div>
          <p>{isError && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;
