import './App.css';
import { Route, Routes } from "react-router-dom";
import SubmitMovieReview from './pages/FormPage';
import MovieRatings from './pages/MovieRatings';
import NavigationBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavigationBar />
         <Routes>
           <Route path="/" element={<MovieRatings />} />
           <Route path="/SubmitMovie" element={<SubmitMovieReview />} />
         </Routes>
    </>
    );
}

export default App;