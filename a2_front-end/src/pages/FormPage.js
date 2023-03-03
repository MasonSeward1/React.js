import { React, useRef } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function SubmitMovieReview() {
    const txtMovieTitle = useRef();
    const txtMovieRelease = useRef();
    const txtMovieActors = useRef();
    const intMovieRating = useRef();

    return (
        <Form method="post" action="/api/addMovie" id="form_display" encType="multipart/form-data">
            <Form.Group>
                <Form.Label>Enter The Movie Title</Form.Label>
                <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>Any Character</Tooltip>}>
                    <Form.Control name='title' ref={txtMovieTitle} type="text" placeholder="Movie Title"></Form.Control>
                    </OverlayTrigger>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter Movie Release Date</Form.Label>
                <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>YYYY-MM-DD</Tooltip>}>
                    <Form.Control 
                        name='releaseDate' 
                        ref = {txtMovieRelease} 
                        type="text" 
                        placeholder="Release Date" 
                        pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}">
                    </Form.Control>
                </OverlayTrigger>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter The Movie's Actors</Form.Label>
                <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>Any Character</Tooltip>}>
                    <Form.Control name='actors' ref = {txtMovieActors} type="text" placeholder="Actors"></Form.Control>
                </OverlayTrigger>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter Movie Rating</Form.Label>
                    <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>A number between 0 and 5</Tooltip>}>
                        <Form.Control name = 'rating' ref = {intMovieRating} type="text" pattern="[0-5]*" placeholder="Movie Rating"></Form.Control>
                    </OverlayTrigger>
            </Form.Group>
            <Form.Group>
                <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>The movie poster. These are stored in a database, so make sure you upload
                    the correct poster and do not upload personal information.</Tooltip>}>
                    <Form.Control name='poster' type='file'></Form.Control>
                </OverlayTrigger>
            </Form.Group>
            <Button variant="primary" type="submit">Submit Movie Review!</Button>
        </Form>
    );
}