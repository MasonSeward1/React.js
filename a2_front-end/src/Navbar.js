import {Link} from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function NavigationBar() {
    return (
    <Navbar>
        <li><Link to="/">Submitted Movie Ratings</Link> </li>
        <li><Link to="/SubmitMovie">Submit a Movie Rating!</Link> </li>
    </Navbar>);
}