import React, { useRef } from "react";

function SubmitMovie() {
    const txtMovieTitle = useRef();
    const txtMovieRelease = useRef();
    const txtMovieActors = useRef();
    const txtMovieRating = useRef();
    const submit = (e) => {
        e.preventDefault();
        const title = txtMovieTitle.current.value;
        const release = txtMovieRelease.current.value;
        const actors = txtMovieActors.current.value;
        const rating = txtMovieRating.current.value;
        alert(`${title}, ${release}, ${actors}, ${rating}`);

        txtMovieTitle.current.value = "";
        txtMovieRelease.current.value = "";
        txtMovieActors.current.value = "";
        txtMovieRating.current.value = "";
    };

    console.log(txtMovieTitle);

    return (
        <form onSubmit={submit}>
            <input
                ref={txtMovieTitle}
                type="text"
                placeholder="Movie Title">  
            </input>
            <input
                ref={txtMovieRelease}
                type="text"
                placeholder="Release Date">  
            </input>
            <input
                ref={txtMovieActors}
                type="text"
                placeholder="Actors">  
            </input>
            <input
                ref={txtMovieRating}
                type="text"
                placeholder="Rating">  
            </input>
            <button>Submit Rating</button>
        </form>
    );
}

const onSubmit = (data) => {



}

export default SubmitMovie;