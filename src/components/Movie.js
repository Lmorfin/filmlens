import React from "react";
import '../styles/Movie.css';
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="">
      <div className="movie__poster">
        <img className="poster" src={IMG_API + poster_path} alt={title} />
        <div className="title__container">
          <div className="title">{title}</div>
          <div className="votes">{vote_average}</div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
{/* <img src={IMG_API + poster_path} alt={title} />; */}