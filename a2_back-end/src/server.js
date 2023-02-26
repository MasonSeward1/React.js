import express, { json } from 'express';
const app = express();
const port = 8000;
app.use(express.urlencoded({extended: false}));
import fs from 'fs';

app.get('/', (req, res) => {
    res.send("Hello World!")
});

const movieData = JSON.parse(fs.readFileSync('./movies.json'));
console.log(movieData);

app.get('/movies', (req, res) => {
    res.json(movieData)
})

app.post('/updateMovies', (req, res) => {
    res.redirect("/");
    movieData.push( {
        "id": movieData.length + 1,
        "title": req.body.title,
        "poster": req.body.poster,
        "releaseDate": req.body.releaseDate,
        "actors": req.body.actors,
        "rating": req.body.rating
    })
    saveData();
    console.log(req.body);
    res.send(req.body);
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