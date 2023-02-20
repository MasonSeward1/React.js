import './App.css';
import { Route, Routes } from "react-router-dom";
import SubmitMovieReview from './pages/SubmitMovie';
import MovieRatings from './pages/MovieRatings';
import Navbar from './Navbar';
import React, { useState, useEffect } from "react";


function App() {

  let [movie, setMovie] = useState(null);

  useEffect( () => {
    fetch("./movies.json")
    .then(reponse => reponse.json())
    .then(setMovie)
    .catch(e=>console.log(e.message))
    }, [])

  return (
    <>
      <Navbar />
         <Routes>
           <Route path="/" element={<MovieRatings movies={(movie)} setMovies={(setMovie)}/>} />
           <Route path="/SubmitMovie" element={<SubmitMovieReview movies={(movie)} setMovies={(setMovie)}/>} />
         </Routes>
    </>
    );
}

export default App;