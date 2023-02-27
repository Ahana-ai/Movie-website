import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from '../context';

const SingleMovie = () => {
  const { id } = useParams();
  //useState to fetch items from the 'Search' array from api
  const [movie, setMovie] = useState([]);
  //useState to show error
  const [isError, setIsError] = useState({ show: "false", msg: "" });

  //Function to call the api url
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      //when the response to promise is true then set the movie
      if (data.Response === "True") {
        setIsError({
          show: false,
          msg: null,
        });
        setMovie(data);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect to get the data repeatedly
  useEffect(() => {
    //Debouncing function
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 800);

    return () => clearTimeout(timeOut);
  }, [id]);
  return(
    <>
        <section>
          <div>
            <figure>
              <img src={movie.Poster} alt={movie.imdbID} />
            </figure>
            <div>
              <p>{movie.Title}</p>
              <p>{movie.Released}</p>
              <p>{movie.Genre}</p>
              <p>{movie.imdbRating} / 10</p>  
              <p>{movie.Country}</p>
              <NavLink to="/">Go back</NavLink>
            </div>
          </div>
        </section>
    </>
  );
}

export default SingleMovie


