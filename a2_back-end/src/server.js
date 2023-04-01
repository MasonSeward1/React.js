import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 8000;
const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('CP3010Project');

app.use(express.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, '../build')));

// Submit guess
app.post('/api/guessWord', async (req, res) => { 
    await client.connect();

    const insertOperation = await db.collection('ClientData').insertOne({
        "eligable": req.body.eligable,
        "guessesLeft": req.body.guessesLeft,
        "timesPlayed": req.body.timesPlayed,
        "winStreak": req.body.winStreak
    })
    client.close();
    console.log("Connection Closed");
    res.redirect('/');
});

// Load statistics
app.get('/api/loadStatistics', async (req, res) => {
    await client.connect();
    const statisticData = await db.collection('ClientData').find({}).toArray();

    if (statisticData.length === 0)
    {
        const insertOperation = await db.collection('ClientData').insertOne(
            {
                "eligable": true,
                "guessesLeft": 3,
                "timesPlayed": 0,
                "winStreak": 0
            })
    }
    else
    {
        res.json(statisticData);
    }
});

// Load word
app.get('/api/loadWord', async (req, res) => {
    await client.connect();

    const wordData = await db.collection('words').aggregate([{$sample:{size:1}}]).toArray();
    res.json(wordData);
    
});

app.listen(8000, () => {
    console.log(`Example app listening on port ${port}`)
});