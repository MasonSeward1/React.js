import React, { useRef } from "react";
import { Link } from "react-router-dom";

function SubmitMovieReview(props) {
    const intMovieId = useRef();
    const txtMovieTitle = useRef();
    const txtMovieRelease = useRef();
    const txtMovieActors = useRef();
    const intMovieRating = useRef();
    const choiceMoviePoster = useRef();

    const submit = (e) => {
        e.preventDefault();
        const movieData = [];
        props.movies.forEach( movie => {
            movieData.push(movie);
        })
        
        const id = intMovieId.current.value;
        const title = txtMovieTitle.current.value;
        const release = txtMovieRelease.current.value;
        const actors = txtMovieActors.current.value;
        const rating = intMovieRating.current.value;
        //const choiceBoxValue = choiceMoviePoster.current.value;

        movieData.push(
                {"id": parseInt(id)},
                {"title": title},
                {"releaseDate": release},
                {"actors": actors},
                {"poster": "https://upload.wikimedia.org/wikipedia/en/c/ca/Die_Hard_%281988_film%29_poster.jpg"},
                {"rating": rating}
        )
        props.setMovies(movieData);

        intMovieId.current.value = "";
        txtMovieTitle.current.value = "";
        txtMovieRelease.current.value = "";
        txtMovieActors.current.value = "";
        intMovieRating.current.value = "";
    };

    console.log(choiceMoviePoster);

    return (
        <>
        <Link to="/"></Link>
        <form onSubmit={submit} id="form_display">
            <input
                ref={intMovieId}
                type="text"
                pattern="[0-9]*"
                placeholder="Movie Id">
            </input>
            <br></br>
            <input
                ref={txtMovieTitle}
                type="text"
                placeholder="Movie Title">  
            </input>
            <br></br>
            <input
                ref={txtMovieRelease}
                type="text"
                pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}"
                placeholder="Release Date">  
            </input>
            <br></br>
            <input
                ref={txtMovieActors}
                type="text"
                placeholder="Actors">  
            </input>
            <br></br>
            <input
                ref={intMovieRating}
                type="text"
                pattern="[0-9]*"
                placeholder="Rating">  
            </input>
            <br></br>
            <select ref={choiceMoviePoster}>
                <option value="1">Allow Devs to choose photo</option>
                <option value="2">Select a movie poster photo from device</option>
            </select>
            <br></br>
            <button>Submit Rating</button>
        </form>
    </>
    );
}

export default SubmitMovieReview;