import { React, useRef } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function HandleGameLogic(props) {
    const words = props.words;
    var currentDate = new Date().getDate()
    var lastPlayed = localStorage.getItem("lastPlayed")
    const txtWordGuess = useRef();

    if (currentDate === lastPlayed) {
        return (
        <h1>You have attempted to guess the word on the {lastPlayed} of the month.</h1>)
    }

    else if ((currentDate !== lastPlayed) || lastPlayed.length === 0) {
        localStorage.setItem("lastPlayed", currentDate)
        
        return (
            <Form method="post" action="/api/guessWord" id="form_display">
                <Form.Group>
                    <Form.Label>Enter your guess!</Form.Label>
                    <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>Any Character</Tooltip>}>
                        <Form.Control name='title' ref={txtWordGuess} type="text" placeholder="Your 5 Letter Word Guess" />
                    </OverlayTrigger>
                </Form.Group>
                <Button variant="primary" type="submit">Submit Guess!</Button>
                <br />
                <Form.Label>Day last played: {currentDate}</Form.Label>
            </Form>
        );
    }
}