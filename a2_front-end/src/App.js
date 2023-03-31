import './App.css';
import { Route, Routes } from "react-router-dom";
import SubmitWordGuess from './pages/SubmitGuess';
import ViewGameStats from './pages/Statistics';
import NavigationBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavigationBar />
         <Routes>
           <Route path="/" element={<SubmitWordGuess />} />
           <Route path="/ViewStatistics" element={<ViewGameStats />} />
         </Routes>
    </>
    );
}

export default App;