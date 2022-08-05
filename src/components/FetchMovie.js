import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Header from "../components/Header";

const apikey = process.env.REACT_APP_MOVIE_API_KEY;
//const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MOVIES_FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apikey}&page=1`;
const TV_POPULAR_API = `https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language=en-US&page=1`;
const PEOPLE_POPULAR_API = `https://api.themoviedb.org/3/person/popular?api_key=${apikey}&language=en-US&page=1`;

const SEARCH_MOVIE_API = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=`;
const SEARCH_TV_API = `https://api.themoviedb.org/3/search/tv?api_key=${apikey}&query=`;
const SEARCH_PEOPLE_API = `https://api.themoviedb.org/3/search/person?api_key=${apikey}&query=`;

const FetchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFilms(MOVIES_FEATURED_API);
  }, []);

  const getFilms = (API) => {
    setIsLoading(true);
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setMovies(data.results);
      });
  };

  const getTVShows = () => {
    setIsLoading(true);
    fetch(TV_POPULAR_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setMovies(data.results);
      });
  };

  // const getPeople = () => {
  //   setIsLoading(true);
  //   fetch(PEOPLE_POPULAR_API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setIsLoading(false);
  //       setMovies(data.results);
  //     });
  // };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getFilms(SEARCH_MOVIE_API + searchTerm);
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="search__bar-container">
        <div className="title__nav_wrapper">
          <div className="header__title">
            <div className="header__title_text">
              <a href="#Home">
                <h2>FilmLens</h2>
              </a>
            </div>
          </div>
          <div className="header_nav">
            <div className="header__nav_wrapper">
              <div className="header__nav_list">
                <div className="nav__items">
                  <a href="/">Movies</a>
                  <a onClick={getTVShows}>TvShows</a>
                  {/* <a onClick={getPeople}>People</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="searchbar" onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          ></input>
        </form>
      </div>



      <div className="movie__container">
        {isLoading && <p>Loading...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}

      </div>
    </>
  );
};

export default FetchMovie;
