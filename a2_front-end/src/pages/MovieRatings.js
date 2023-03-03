import { Link } from "react-router-dom";
import { Button, Image, ListGroup } from 'react-bootstrap';


const MovieRatings = (props) => {
    let movies = props.movies;

    function removeMovie(title) {
        props.setMovies(movies.filter((item) => item.title !== title));
        var myHeader = new Headers();
        myHeader.append("Content-Type", "application/x-www-form-urlencoded")
        var url = new URLSearchParams();
        url.append("title", title)

        fetch("/api/removeMovies", {method: 'post', headers: myHeader, body: url, redirect: 'follow'})
        .then(response => response.text())
        .catch(error => console.log('error', error));
        }

    if (movies == null)
        return <h1>Loading Movie Data...</h1>

    return (
        <>
            <Link to="/SubmitMovie"></Link>
            <ul id="movie_display">
            {
                    movies.map(movie => 
                    [
                        <ListGroup id="movie_display">
                            <ListGroup.Item key={movie.id}>Movie Title: {movie.title}</ListGroup.Item>
                            <ListGroup.Item id='poster'><Image rounded src={movie.poster} alt={movie.poster}></Image></ListGroup.Item>
                            <ListGroup.Item>Release Date: {movie.releaseDate}</ListGroup.Item>
                            <ListGroup.Item>Actors: {movie.actors}</ListGroup.Item>
                            <ListGroup.Item>Rating: {movie.rating}</ListGroup.Item>
                            <Button variant="warning" onClick = { () => {removeMovie(movie.title)}}>Delete Movie</Button>
                        </ListGroup>
                    ])
            }
            </ul>
        </>
    )
}

export default MovieRatings;