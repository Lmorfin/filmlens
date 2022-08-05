import React, { useState, useEffect } from "react";
const apikey = process.env.REACT_APP_MOVIE_API_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=`;






// const SearchMovie = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [movies, setMovies] = useState([]);

//     const handleOnSubmit = (e) => {
//       e.preventDefault();

//       fetch(SEARCH_API + searchTerm)
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           setMovies(data.results);
//         });


//     };

//           const handleOnChange = (e) => {
//             setSearchTerm(e.target.value);
//           };

//   return (
//     <div className="search__bar-container">
//       <form className="searchbar" onSubmit={handleOnSubmit}>
//         <label>Search</label>
//         <input
//           type="text"
//           placeholder="Search for a Movie..."
//           value={searchTerm}
//           onChange={handleOnChange}
//         ></input>
//       </form>
//     </div>
//   );
// };

// export default SearchMovie;
