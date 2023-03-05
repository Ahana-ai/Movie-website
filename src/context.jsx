import { createContext, useEffect, useState } from "react";
const AppContext = createContext();

export const API_URL = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_APP_API_KEY
}`;

const AppProvider = ({ children }) => {
  //useState to fetch items from the 'Search' array from api
  const [movie, setMovie] = useState([]);
  //useState to show error
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  //useState to find the movie in search box
  const [query, setQuery] = useState("");

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
        setMovie(data.Search);
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
      getMovies(`${API_URL}&s=${query}`);
    }, 500);

    return () => clearTimeout(timeOut);
  }, [query]);

  return (
    <AppContext.Provider value={{ movie, isError, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
