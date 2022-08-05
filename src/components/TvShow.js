import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const TvShow = ({name, poster_path, overview, vote_average}) => {
  return (
    <div className="tvShow__poster">
      <img className="poster" src={IMG_API + poster_path} alt={name} />
      <div className="title__container">
        <div className="title"> {name}</div>
        <div className="votes"> {vote_average} </div>
      </div>
    </div>
  );
};

export default TvShow;
