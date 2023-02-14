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
        <ul>
           {
                props.movie_list.map(movie => [<li>Name: {movie.name}</li>, <li>Release Date: {movie.releaseDate}</li>, <li>Actors: {movie.actors}</li>,
                <li id="poster">test</li>, <li>Rating: {movie.rating}</li>, <p><br></br></p>])
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