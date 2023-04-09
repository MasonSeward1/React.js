import { React, useRef } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import guessWord from "../logic/GuessWord";

export default function HandleGameLogic(props) {
    const guesses = props.gl;

    console.log("GUESSES LEFT:::" + guesses);
    var currentDate = new Date().getDate()
    var lastPlayed = localStorage.getItem("lastPlayed");

    const txtWordGuess = useRef();

    if (currentDate === lastPlayed)
    {
        return (
        <h1>You have attempted to guess the word on the {lastPlayed} of the month.</h1>)
    }
    else if (guesses === 0)
    {
        return (<h1>You are out of guesses. Try again tomorrow!</h1>)
    }
    else if (((currentDate !== lastPlayed) || lastPlayed.length === 0) && guesses !== 0)
    {
        localStorage.setItem("lastPlayed", currentDate)

        fetch('/api/updateTimesPlayed').then(reponse => reponse.json()).catch(e=>console.log(e.message));

        return (
            <Form onSubmit={guessWord} id="form_display">
                <Form.Group>
                    <Form.Label>Enter your guess!</Form.Label>
                    <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>Any 5 Letter Word Guess</Tooltip>}>
                        <Form.Control name='guess' ref={txtWordGuess} type="text" placeholder="Your 5 Letter Word Guess" pattern="[A-Za-z]{5}$"/>
                    </OverlayTrigger>
                </Form.Group>
                <Button variant="primary" type="submit">Submit Guess!</Button><br />
                <Form.Label>Day last played: {currentDate}</Form.Label>
            </Form>
        );
    }
}