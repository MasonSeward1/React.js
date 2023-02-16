import React, { useRef } from "react";
import { Link } from "react-router-dom";

function SubmitMovieReview(props) {
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
        
        const title = txtMovieTitle.current.value;
        const release = txtMovieRelease.current.value;
        const actors = txtMovieActors.current.value;
        const rating = intMovieRating.current.value;

        const id = movieData.length + 1;
        console.log(id);
        const choiceBoxValue = choiceMoviePoster.current.value;
        
        let submittedMoviePoster = "";

        if (choiceBoxValue === "1")
        {
            submittedMoviePoster = "https://static.vecteezy.com/system/resources/previews/010/973/697/original/movie-poster-cinema-banner-with-popcorn-soda-clapperboard-glowing-cinema-banner-illustration-vector.jpg";
        }
        else
        {
            submittedMoviePoster = prompt("Enter link to movie poster");
        }

        movieData.push(
                {"id": id,
                "title": title,
                "releaseDate": release,
                "actors": actors,
                "poster": submittedMoviePoster,
                "rating": rating}
        )
        props.setMovies(movieData);

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
            <h1>'</h1>
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
                placeholder="Release Date (yyyy-mm-dd)">  
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
                pattern="[0-5]*"
                placeholder="Rating (0-5)">  
            </input>
            <br></br>
            <select 
                ref={choiceMoviePoster}>
                    <option value="1">Allow Devs to choose photo</option>
                    <option value="2">Enter movie poster link</option>
            </select>
            <br></br>
            <button>Submit Rating</button>
        </form>
    </>
    );
}

export default SubmitMovieReview;