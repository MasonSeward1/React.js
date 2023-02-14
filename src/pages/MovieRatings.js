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
        </>
    )
}

function MovieList(props) {
    return (
        <ul class="movie_display">
           {
                props.movie_list.map(movie => [<li>Name: {movie.name}</li>, <li>Release Date: {movie.releaseDate}</li>, <li>Actors: {movie.actors}</li>,
                <li id="poster"><img src={movie.poster} alt="movie poster"></img></li>, <li>Rating: {movie.rating}</li>, <p><br></br></p>])
           }
        </ul>
    )
}

export default MovieRatings;