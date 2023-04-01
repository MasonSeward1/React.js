import './App.css';
import { Route, Routes } from "react-router-dom";
import HandleGameLogic from './pages/SubmitGuess';
import ViewGameStats from './pages/Statistics';
import NavigationBar from './Navbar';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  let [gameStatistics, setGameStatistics] = useState(null);

  useEffect( () => {
    fetch('/api/loadStatistics')
    .then(reponse => reponse.json())
    .then(setGameStatistics)
    .catch(e=>console.log(e.message))
    }, [])

    let [words, setWords] = useState(null);

    useEffect( () => {
      fetch('/api/loadWord')
      .then(response => response.json())
      .then(r => console.log(r))
      .then(setWords)
      .catch(e=>console.log(e.message))
    }, [])


  return (
    <>
      <NavigationBar />
         <Routes>
           <Route path="/" element={<HandleGameLogic stats={(gameStatistics)} words={(words)}/>} />
           <Route path="/ViewStatistics" element={<ViewGameStats stats={(gameStatistics)} />} />
         </Routes>
    </>
    );
}

export default App;