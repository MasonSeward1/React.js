import express, { json } from 'express';
const app = express();
const port = 8000;
app.use(express.urlencoded({extended: false}));
import fs from 'fs';
import { MongoClient } from 'mongodb';

const movieData = JSON.parse(fs.readFileSync('./movies.json'));
console.log(movieData);

app.get('/movies', async (req, res) => {
    //res.json(movieData)
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('react-movieratings-db');
    const movieData = await db.collection('articles').find({}).toArray();

    console.log(movieData);
    console.log("Here");
    res.json(movieData);
})

app.post('/updateMovies', async (req, res) => { 
    saveData();
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('react-movieratings-db');

    const insertOperation = await db.collection('articles').insertOne({
        "title": req.body.title,
        "poster": req.body.poster,
        "releaseDate": req.body.releaseDate,
        "actors": req.body.actors,
        "rating": req.body.rating
    })
    //console.log(req.body.poster);
    client.close();
    res.redirect('/');
})

app.post('/removeMovies', async (req, res) => {
    //props.setMovies here
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('react-movieratings-db');

    const deleteOperation = await db.collection('articles').deleteOne({"title": req.body.title})
    console.log(`Movie ${req.body.title} has been deleted.`);

    client.close();
    })

const saveData = () => {
    const jsonContent = JSON.stringify(movieData);
    fs.writeFile("./movies.json", jsonContent, 'utf8', function (err) {
        if (err)
        {
            console.log("Error");
        }
        console.log("Success");
    });
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});