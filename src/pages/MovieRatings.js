import { useState, useEffect } from "react";


const MovieRatings = () => {
    let [movies, setMovies] = useState(null);

    
    useEffect( () => {
        fetch("./movies.json")
        .then(reponse => reponse.json())
        .then(setMovies)
        .catch(e=>console.log(e.message))
    }, [])

    if (movies == null) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <MovieList movie_list={(movies)}></MovieList>
            <button onClick = { () => { console.log("Click"); setMovies([]) }}>Remove Movie</button>
        </>
    )
}

function MovieList(props) {
    return (
        <ul>
           {
           props.movie_list.map(movie => [<li>Name: {movie.name}</li>, <li>Release Date: {movie.releaseDate}</li>, <li>Actors: {movie.actors}</li>,
        <li id="poster">test</li>, <li>Rating: {movie.rating}</li>, 
        <button onClick = { () => { console.log("Click"); MovieRatings.setMovies([]) }}>Remove Movie</button>])
           }
        </ul>
    )
}

function Header(props) {
    return (
        <h1>{props.name} Movie Ratings</h1>
    )
}

export default MovieRatings;