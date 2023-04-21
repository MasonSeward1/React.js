export default function guessWord(props)
{
    const word = props.target.word.value;
    const userGuess = props.target.guess.value;
    const guesses = props.gl;
    console.log(word);

    fetch('/api/updateTimesPlayed').then(reponse => reponse.json()).catch(e=>console.log(e.message));
    if (word == userGuess)
    {
        props.preventDefault();
        alert("You have guessed the word! Play again tomorrow.");
        fetch('/api/wordGuessed').then(response => response.text()).catch(e => console.log(e))
        fetch('/api/updateWinStreak').then(response => response.text()).catch(e => console.log(e))
        fetch('/api/updateWins').then(response => response.text()).catch(e => console.log(e))
        window.location.href = "/ViewStatistics";
    }
    else if (word !== userGuess && guesses === 0)
    {
        alert("Game over!");
        fetch('/api/deleteWinStreak').then(response => response.text()).catch(e => console.log(e))
    }
    else
    {
        alert("Guess again!");
        fetch('/api/updateGuessesLeft').then(response => response.text()).catch(e => console.log(e))
    }
}