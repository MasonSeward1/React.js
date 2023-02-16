import {Link} from "react-router-dom";
export default function Navbar() {
    return (
    <nav>
        <li><Link to="/">Movie Ratings</Link> </li>
        <li><Link to="/SubmitMovie">Submit Movie Ratings</Link> </li>
    </nav>);
}