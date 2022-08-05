import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import FetchMovie from "./components/FetchMovie";
import Footer from "./components/Footer";
import { useRoutes } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {


  return (
    <>
      <FetchMovie />
      <Footer />
    </>
  );
};

export default App;
