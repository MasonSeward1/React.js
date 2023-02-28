import express, { json } from 'express';
import fs from 'fs';
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';
import path from 'path';
import multer from 'multer';

const app = express();
const port = 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const movieData = JSON.parse(fs.readFileSync('./movies.json'));
const upload = multer({ dest: 'posters/'})

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../posters'))); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
});

app.get('/api/movies', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('react-movieratings-db');
    const movieData = await db.collection('articles').find({}).toArray();

    res.json(movieData);
})

app.post('/api/addMovie', upload.single('poster'), async (req, res) => { 
    saveData();
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('react-movieratings-db');

    const insertOperation = await db.collection('articles').insertOne({
        "title": req.body.title,
        "poster": req.file.filename,
        "releaseDate": req.body.releaseDate,
        "actors": req.body.actors,
        "rating": req.body.rating
    })
    await client.close();
    res.redirect('/');
})

app.post('/api/removeMovies', async (req, res) => {
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