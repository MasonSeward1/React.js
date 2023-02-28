import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';
function SubmitMovieReview(props) {
    const txtMovieTitle = useRef();
    const txtMovieRelease = useRef();
    const txtMovieActors = useRef();
    const intMovieRating = useRef();

    // const [image, setImage] = useState([]);
    // function onImageChange(e) {
    //     setImage([...e.target.files]);
    // }
    

    return (
        <>
        <Link to="/"></Link>
        <Form method="post" action="/updateMovies">
            <h1>'</h1>
            <input
                name='title'
                ref = {txtMovieTitle}
                type="text"
                placeholder="Movie Title">  
            </input>
            <br></br>
            <input
                name='releaseDate'
                ref = {txtMovieRelease}
                type="text"
                pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}"
                placeholder="Release Date (yyyy-mm-dd)">  
            </input>
            <br></br>
            <input
                name='actors'
                ref = {txtMovieActors}
                type="text"
                placeholder="Actors">  
            </input>
            <br></br>
            <input
                name = 'rating'
                ref = {intMovieRating}
                type="text"
                pattern="[0-5]*"
                placeholder="Rating (0-5)">  
            </input>
            <br></br>
            {/* <input name='poster' type='file'></input> */}
            <br></br>
            <input type="submit" />
        </Form>
    </>
    );
}

export default SubmitMovieReview;