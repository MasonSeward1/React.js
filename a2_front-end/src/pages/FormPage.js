import { React, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function SubmitMovieReview(props) {
    const txtMovieTitle = useRef();
    const txtMovieRelease = useRef();
    const txtMovieActors = useRef();
    const intMovieRating = useRef();

    return (
        <Form method="post" action="/api/addMovie" id="form_display" encType="multipart/form-data">
            <Form.Group>
                <Form.Label>Enter The Movie Title</Form.Label>
                <Form.Control name='title' ref={txtMovieTitle} type="text" placeholder="Movie Title"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter Movie Release Date</Form.Label>
                <Form.Control name='releaseDate' ref = {txtMovieRelease} type="text" placeholder="Release Date (yyyy-mm-dd)" pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter The Movie's Actors</Form.Label>
                <Form.Control name='actors' ref = {txtMovieActors} type="text" placeholder="Actors"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter Movie Rating</Form.Label>
                <Form.Control name = 'rating' ref = {intMovieRating} type="text" pattern="[0-5]*" placeholder="Rating (0-5)"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control name='poster' type='file'></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Submit Movie Review!</Button>
        </Form>
    );
}

export default SubmitMovieReview;