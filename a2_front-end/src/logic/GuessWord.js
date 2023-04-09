

export default function guessWord(props)
{
    props.preventDefault();
    console.log(props.target.guess.value);
    return (<h1>guessWord</h1>);
}