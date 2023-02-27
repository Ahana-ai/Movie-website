import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const API_URL = ` http://www.omdbapi.com/?i=tt3896198&apikey=70c95987&s=titanic`

const AppProvider = ({children}) => {
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
            if(data.Response === "True"){
                setMovie(data.Search);
            } else {
                setIsError({
                    show: true,
                    msg: data.error
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    //useEffect to get the data repeatedly
    useEffect(() => {
        getMovies(API_URL);
    },[]);

    return <AppContext.Provider value={{ movie, isError }}>
        {children}
    </AppContext.Provider>
}

export { AppContext, AppProvider };