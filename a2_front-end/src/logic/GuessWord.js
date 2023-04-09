

export default function guessWord(props)
{
    props.preventDefault();
    const word = props.target.word.value;
    const userGuess = props.target.guess.value;
    // console.log(word);

    if (word === userGuess)
    {
        //TODO fill this in
        console.log("the word matches");
    }
    else
    {
        console.log("Wrong word");

        fetch('/api/updateGuessesLeft')
        .then(response => response.text())
        .catch(e => console.log(e))
    }
}