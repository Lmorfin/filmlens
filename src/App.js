import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import FetchMovie from "./components/FetchMovie";
import Footer from "./components/Footer";
const App = () => {

  
  return (
    <div>
      <Header />
      <FetchMovie />
      <Footer />
    </div>
  );
};

export default App;
