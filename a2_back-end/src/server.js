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
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('react-movieratings-db');

    const insertOperation = await db.collection('articles').insertOne({
        "id": movieData.length + 1,
        "title": req.body.title,
        "poster": req.body.poster,
        "releaseDate": req.body.releaseDate,
        "actors": req.body.actors,
        "rating": req.body.rating
    })
    console.log(insertOperation);
    res.redirect('/');

    // res.redirect("/");
    // movieData.push( {
        // "id": movieData.length + 1,
        // "title": req.body.title,
        // "poster": req.body.poster,
        // "releaseDate": req.body.releaseDate,
        // "actors": req.body.actors,
        // "rating": req.body.rating
    // })
    // saveData();
    // console.log(req.body);
    // res.send(req.body);
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