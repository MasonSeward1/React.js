import './App.css';
import { Route, Routes } from "react-router-dom";
import SubmitMovieReview from './pages/FormPage';
import MovieRatings from './pages/MovieRatings';
import NavigationBar from './Navbar';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  let [movie, setMovie] = useState(null);

  useEffect( () => {
    fetch('/api/movies')
    .then(reponse => reponse.json())
    .then(setMovie)
    .catch(e=>console.log(e.message))
    }, [])

  return (
    <>
      <NavigationBar />
         <Routes>
           <Route path="/" element={<MovieRatings movies={(movie)} setMovies={(setMovie)}/>} />
           <Route path="/SubmitMovie" element={<SubmitMovieReview movies={(movie)} setMovies={(setMovie)}/>} />
         </Routes>
    </>
    );
}

export default App;