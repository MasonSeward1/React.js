import {Link} from "react-router-dom";
export default function Navbar() {
    return (
    <nav className="nav">
        <li><Link to="/MovieRatings">Movie Ratings</Link> </li>
        <li><Link to="/SubmitMovie">Submit Movie Ratings</Link> </li>
    </nav>);
}