import express from 'express';
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('CP3010Project');

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../posters'))); 


app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
});

// Load movies
app.get('/api/movies', async (req, res) => {
    await client.connect();

    const db = client.db('react-movieratings-db');
    const movieData = await db.collection('articles').find({}).toArray();

    res.json(movieData);
});

// Submit guess
app.post('/api/guessWord', async (req, res) => { 
    await client.connect();

    const insertOperation = await db.collection('ClientData').insertOne({
        "guessesLeft": req.body.guessesLeft,
        "timeGuessesOut": req.file.timeGuessesOut,
        "timesPlayed": req.body.timesPlayed,
        "averageScore": req.body.averageScore,
        "winStreak": req.body.winStreak
    })
    client.close();
    console.log("Connection Closed");
    res.redirect('/');
});

app.listen(8000, () => {
    console.log(`Example app listening on port ${port}`)
});