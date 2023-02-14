import { useState, useEffect } from "react";

const MovieRatings = () => {
    let [movies, setMovies] = useState(null);
    function removeMovie(id) {
        const newList = movies.filter((item) => item.id !== id);
        setMovies(newList);
    }

    useEffect( () => {
        fetch("./movies.json")
        .then(reponse => reponse.json())
        .then(setMovies)
        .catch(e=>console.log(e.message))
        }, []
    )


    if (movies == null) {
        return <h1>Loading...</h1>
    }


    return (
        <ul id="movie_display">
           {
                movies.map(movie => [
                <li key={movie.id}>Name: {movie.name}</li>, 
                <li>Release Date: {movie.releaseDate}</li>, 
                <li>Actors: {movie.actors}</li>,
                <li id="poster"><img src={movie.poster} alt="movie poster"></img></li>, 
                <li>Rating: {movie.rating}</li>, <button type="button" onClick = { () => {
                    console.log("Movie Deleted"); removeMovie(movie.id)}}>Remove Movie</button>, <p></p>])
           }
        </ul>
    )
}

export default MovieRatings;