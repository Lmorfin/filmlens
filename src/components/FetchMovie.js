import React, { useState, useEffect } from "react";
import Movie from "./Movie";
const apikey = process.env.REACT_APP_MOVIE_API_KEY;
//const IMG_API = "https://image.tmdb.org/t/p/w1280";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apikey}&page=1`;

const FetchMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    // <div className="search__container_wrapper">
    //   <div className="search__container">
    //     <div className="search__context">
    //       <h3>Millions of Movies!</h3>
    //       <input
    //         className="textfield"
    //         type="text"
    //         placeholder="Search for Movies, TVshows, People..."
    //       ></input>
    //     </div>
    //   </div>
    // </div>

    <div className="movie__container">
      {movies.length > 0 &&
        movies.map((movie) => 
          <Movie key={movie.id} {...movie} />
        )}
    </div>
  );
};

export default FetchMovie;