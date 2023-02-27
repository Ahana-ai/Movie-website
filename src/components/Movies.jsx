import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context";

const Movies = () => {
  const { movie } = useContext(AppContext);
  return (
    <>
      <section>
        <div className="">
          {movie.map((currMovie) => {
            const { imdbID, Title, Poster } = currMovie;
            return( <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div>
                  <h2>{Title}</h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </div>
            </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
