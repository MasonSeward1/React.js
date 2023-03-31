import { React, useRef } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function SubmitWordGuess() {
    const txtWordGuess = useRef();

    return (
        <Form method="post" action="/api/guessWord" id="form_display">
            <Form.Group>
                <Form.Label>Enter your guess!</Form.Label>
                <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>Any Character</Tooltip>}>
                    <Form.Control name='title' ref={txtWordGuess} type="text" placeholder="Your Guess" />
                </OverlayTrigger>
            </Form.Group>
            <Button variant="primary" type="submit">Submit Guess!</Button>
        </Form>
    );
}