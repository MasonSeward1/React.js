import { Link } from "react-router-dom";
import { ListGroup } from 'react-bootstrap';


const ViewGameStats = (props) => {
    let statistics = props.stats;

    if (statistics == null)
        return ( 
            <>
                <h1>Loading Statistic Data...</h1>,
                <p>If the data does not appear in a moment, please refresh the page.</p>
            </>
        )

    return (
        <>
            <Link to="/ViewStatistics"></Link>
            <ul id="movie_display">
            {
                statistics.map(stat => 
                    [
                    <ListGroup id="movie_display">
                        <ListGroup.Item>Guesses left: {stat.guessesLeft}</ListGroup.Item>
                        <ListGroup.Item>Times Played: {stat.timesPlayed}</ListGroup.Item>
                        <ListGroup.Item>Number of wins: {stat.wins}</ListGroup.Item>
                        <ListGroup.Item>Number of win-streaks: {stat.winStreak}</ListGroup.Item>
                    </ListGroup>
                    ])
            }
            </ul>
        </>
    )
}

export default ViewGameStats;