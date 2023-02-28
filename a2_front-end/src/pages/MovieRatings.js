import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const MovieRatings = (props) => {
    let movies = props.movies;

    function printLogInfo(string)
    {
        console.log(string)
        
    }

    function removeMovie(title) {
        props.setMovies(movies.filter((item) => item.title !== title));
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("title", title); // use req and res
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };

        fetch("/removeMovies", requestOptions)
        .then(response => response.text())
        .then(printLogInfo)
        .catch(error => console.log('error', error));
        }

    if (movies == null) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Link to="/SubmitMovie"></Link>
            <ul id="movie_display">
            {
                    movies.map(movie => 
                    [
                        <li key={movie.id}>Movie Title: {movie.title}</li>, 
                        <li id="poster"><img src={movie.poster} alt="movie poster"></img></li>,
                        <li>Release Date: {movie.releaseDate}</li>, 
                        <li>Actors: {movie.actors}</li>, 
                        <li>Rating: {movie.rating}</li>, 
                        <Button variant="warning" onClick = { () => {removeMovie(movie.title)}}>Delete Movie</Button>,
                        <p></p>
                    ])
            }
            </ul>
        </>
    )
}

export default MovieRatings;