import { Link } from "react-router-dom";

const MovieRatings = (props) => {
    let movies = props.movies;

    function removeMovie(id) {
        props.setMovies(movies.filter((item) => item.id !== id));
    }

    if (movies == null) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Link to="/SubmitMovie"></Link>
            <h1>`</h1>
            <ul id="movie_display">
            {
                    movies.map(movie => 
                    [
                        <li key={movie.id}>Movie Title: {movie.title}</li>, 
                        <li id="poster"><img src={movie.poster} alt="movie poster"></img></li>,
                        <li>Release Date: {movie.releaseDate}</li>, 
                        <li>Actors: {movie.actors}</li>, 
                        <li>Rating: {movie.rating}</li>, 
                        <button type="button" onClick = { () => {
                            console.log("Movie `" + movie.title + "` has been deleted"); removeMovie(movie.id)}}>Remove Movie</button>, <p></p>
                    ])
            }
            </ul>
        </>
    )
}

export default MovieRatings;