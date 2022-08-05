import React from "react";
import { Outlet, Link } from "react-router-dom";
import SearchMovie from "./SearchMovie";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header__display_desktop">
      <div className="title__nav_wrapper">
        <div className="header__title">
          <div className="header__title_text">
            <a href="#Home">
              <h2>FilmLens</h2>
            </a>

            {/* <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" /> */}
          </div>
        </div>
        <div className="header_nav">
          <div className="header__nav_wrapper">
            <div className="header__nav_list">
              <div className="nav__items">
                <a href="/">Movies</a>
                <a href="/tvShows">TvShows</a>
                <a href="#People">People</a> 
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default Header;
