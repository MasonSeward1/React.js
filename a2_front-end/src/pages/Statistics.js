import { Link } from "react-router-dom";
import { ListGroup } from 'react-bootstrap';


const ViewGameStats = (props) => {
    let stats = props.stats;

    if (stats == null)
        return <h1>Loading Statistic Data...</h1>

    return (
        <>
            <Link to="/SubmitMovie"></Link>
            <ul id="movie_display">
            {
                    stats.map(stat => 
                    [
                        <ListGroup id="movie_display">
                            <ListGroup.Item key={stat.id}>Times Played: {stat.played}</ListGroup.Item>
                        </ListGroup>
                    ])
            }
            </ul>
        </>
    )
}

export default ViewGameStats;