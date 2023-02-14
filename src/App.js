import HomePage from './pages/HomePage';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SubmitMovie from './pages/SubmitMovie';
import MovieRatings from './pages/MovieRatings';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>""</h1>
      <Navbar />
      <div id='page-body'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MovieRatings" element={<MovieRatings />} />
          <Route path="/SubmitMovie" element={<SubmitMovie />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;