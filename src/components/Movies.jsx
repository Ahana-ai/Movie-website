import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context";

const Movies = () => {
  const { movie } = useContext(AppContext);

  return (
    <>
      <section>
        <div className="container movie-card">
          {movie.map((currMovie) => {
            const { imdbID, Title, Poster } = currMovie;
            //use js to cut the string short and replace it with dots
            const movieName = Title.substring(0, 15);
            return( <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div>
                  <h2>{movieName > 15 ? `movieName...` : movieName}</h2>
                  <img src={Poster} alt={imdbID} className="h-52 m-auto" />
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
