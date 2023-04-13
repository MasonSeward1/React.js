import { React, useRef } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import guessWord from "../logic/GuessWord";

export default function SubmitGuess(props) {
    const guesses = props.gl;
    const word = props.word;

    var currentDate = new Date().getDate();
    var lastPlayed = localStorage.getItem("lastPlayed");
    console.log(currentDate)

    const txtWordGuess = useRef();

    if (currentDate != lastPlayed)
    {
        fetch('/api/resetGuessesLeft').then(reponse => reponse.json()).catch(e=>console.log(e.message));
        fetch('/api/setWord').then(reponse => reponse.json()).catch(e=>console.log(e.message));
    }

    if (currentDate == lastPlayed && guesses === 0)
    {
        return (<h1>You have attempted to guess the word on the {lastPlayed} of the month, and have either guessed the word or are out of guesses.</h1>)
    }
    else if (((currentDate !== lastPlayed) || lastPlayed.length === 0) && guesses !== 0)
    {
        localStorage.setItem("lastPlayed", currentDate)

        fetch('/api/updateTimesPlayed').then(reponse => reponse.json()).catch(e=>console.log(e.message));

        if (guesses != null)
        {
            if (guesses === 3)
            {
                return (
                    <Form onSubmit={guessWord} id="form_display">
                        <Form.Group>
                            <Form.Label>Enter your guess!</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>Any 5 Letter Word Guess</Tooltip>}>
                                <Form.Control name='guess' ref={txtWordGuess} type="text" placeholder="Your 5 Letter Word Guess" pattern="[A-Za-z]{5,5}$"/>
                            </OverlayTrigger>
                            <Form.Control name="word" type="hidden" value={(word)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit Guess!</Button><br/>
                        <Form.Label>Day last played: {currentDate}</Form.Label><br/>
                        <Form.Label>Guesses Left: {guesses}</Form.Label><br/>
                        <Form.Label>Hints:</Form.Label><br/>
                        <Form.Label>The first letter is: {String(word).substring(0,1)}</Form.Label><br/>
                    </Form>
                );
            }
            else if (guesses === 2)
            {
                return (
                    <Form onSubmit={guessWord} id="form_display">
                        <Form.Group>
                            <Form.Label>Enter your guess!</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>Any 5 Letter Word Guess</Tooltip>}>
                                <Form.Control name='guess' ref={txtWordGuess} type="text" placeholder="Your 5 Letter Word Guess" pattern="[A-Za-z]{5,5}$"/>
                            </OverlayTrigger>
                            <Form.Control name="word" type="hidden" value={(word)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit Guess!</Button><br/>
                        <Form.Label>Day last played: {currentDate}</Form.Label><br/>
                        <Form.Label>Guesses Left: {guesses}</Form.Label><br/>
                        <Form.Label>Hints:</Form.Label><br/>
                        <Form.Label>The first letter is: {String(word).substring(0,1)}</Form.Label><br/>
                        <Form.Label>The third letter is: {String(word).substring(2,3)}</Form.Label><br/>
                    </Form>
                );
            }
            else if (guesses === 1)
            {
                return (
                    <Form onSubmit={guessWord} id="form_display">
                        <Form.Group>
                            <Form.Label>Enter your guess!</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>Any 5 Letter Word Guess</Tooltip>}>
                                <Form.Control name='guess' ref={txtWordGuess} type="text" placeholder="Your 5 Letter Word Guess" pattern="[A-Za-z]{5,5}$"/>
                            </OverlayTrigger>
                            <Form.Control name="word" type="hidden" value={(word)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit Guess!</Button><br/>
                        <Form.Label>Day last played: {currentDate}</Form.Label><br/>
                        <Form.Label>Guesses Left: {guesses}</Form.Label><br/>
                        <Form.Label>Hints:</Form.Label><br/>
                        <Form.Label>The first letter is: {String(word).substring(0,1)}</Form.Label><br/>
                        <Form.Label>The third letter is: {String(word).substring(2,3)}</Form.Label><br/>
                        <Form.Label>The fifth letter is: {String(word).substring(4,5)}</Form.Label><br/>
                    </Form>
                );
            }
        }

        return (
            <Form onSubmit={guessWord} id="form_display">
                <Form.Group>
                    <Form.Label>Enter your guess!</Form.Label>
                    <OverlayTrigger placement="right" overlay={<Tooltip id='tooltip-right'>Any 5 Letter Word Guess</Tooltip>}>
                        <Form.Control name='guess' ref={txtWordGuess} type="text" placeholder="Your 5 Letter Word Guess" pattern="[A-Za-z]{5,5}$"/>
                    </OverlayTrigger>
                    <Form.Control name="word" type="hidden" value={(word)}/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit Guess!</Button><br/>
                <Form.Label>Day last played: {currentDate}</Form.Label><br/>
                <Form.Label>Guesses Left: {guesses}</Form.Label>
            </Form>
        );
    }
}