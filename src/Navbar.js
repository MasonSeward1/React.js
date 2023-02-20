import {Link} from "react-router-dom";

export default function Navbar() {
    return (
    <nav>
        <li><Link to="/">Submitted Movie Ratings</Link> </li>
        <li><Link to="/SubmitMovie">Submit a Movie Rating!</Link> </li>
    </nav>);
}