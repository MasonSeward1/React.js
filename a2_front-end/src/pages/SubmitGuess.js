import { React, useRef } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function SubmitWordGuess(props) {
    var currentDate = new Date().getDate()
    var lastPlayed = localStorage.getItem("lastPlayed")
    const txtWordGuess = useRef();
    console.log(currentDate)
    console.log(lastPlayed)

    if (currentDate === lastPlayed) {
        return <h1>You have already guessed within 24h.</h1>
    }
    else if ((currentDate !== lastPlayed) || lastPlayed.length === 0) {
        localStorage.setItem("lastPlayed", currentDate)
        
        return (
            <Form method="post" action="/api/guessWord" id="form_display">
                <Form.Group>
                    <Form.Label>Enter your guess!</Form.Label>
                    <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>Any Character</Tooltip>}>
                        <Form.Control name='title' ref={txtWordGuess} type="text" placeholder="Your Guess" />
                    </OverlayTrigger>
                </Form.Group>
                <Button variant="primary" type="submit">Submit Guess!</Button>
                <br />
                <Form.Label>Day last played: {lastPlayed}</Form.Label>
            </Form>
        );
    }
}