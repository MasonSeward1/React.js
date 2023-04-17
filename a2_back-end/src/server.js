import express from "express";
import { MongoClient } from "mongodb";
import { fileURLToPath } from "url";
import path from "path";
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()

const jsonParser = bodyParser.json();
const app = express();
const port = 8000;
const client = new MongoClient(process.env.MONGO_CONNECT);
const db = client.db("CP3010Project");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../build")));

app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

// Load statistics
app.get("/api/loadStatistics", async (req, res) => {
  await client.connect();
  const statisticData = await db.collection("ClientData").find({}).toArray();

  if (statisticData.length === 0) {
    await db.collection("ClientData").insertOne({
      guessesLeft: 5,
      timesPlayed: 0,
      wins: 0,
      winStreak: 0,
      dataType: "player",
    });
  } else {
    res.json(statisticData);
  }
});

app.get("/api/wordGuessed", async (req, res) => {
  res.redirect("/ViewStatistics");
});

// Load word
app.get("/api/loadWord", async (req, res) => {
  await client.connect();
  const selectedWordArray = await db
    .collection("wordOfDay")
    .aggregate([{ $sample: { size: 1 } }])
    .toArray();
  var selectedWord;

  selectedWordArray.map((word) => (selectedWord = word.word));
  res.json(selectedWord);
});

app.get("/api/setWord", async (req, res) => {
  await client.connect();
  var retrievedWord = await db
    .collection("words")
    .aggregate([{ $sample: { size: 1 } }])
    .toArray();
  var selectedWord;

  retrievedWord.map((word) => (selectedWord = word.word));

  db.collection("wordOfDay").updateOne(
    { dataType: "wordOfDay" },
    { $set: { word: selectedWord } }
  );
});

app.get("/api/updateWinStreak", async (req, res) => {
  db.collection("ClientData").updateOne(
    { dataType: "player" },
    { $inc: { winStreak: 1 } }
  );
});

app.get("/api/updateWins", async (req, res) => {
  db.collection("ClientData").updateOne(
    { dataType: "player" },
    { $inc: { wins: 1 } }
  );
});

app.get("/api/deleteWinStreak", async (req, res) => {
  db.collection("ClientData").updateOne(
    { dataType: "player" },
    { $set: { winStreak: 0 } }
  );
});

app.get("/api/loadGuessesLeft", async (req, res) => {
  await client.connect();

  const guessesLeft = await db.collection("ClientData").find({}).toArray();
  res.json(guessesLeft);
});

// Update the timesPlayed record in the db
app.get("/api/updateTimesPlayed", async (req, res) => {
  await client.connect();

  db.collection("ClientData").updateOne(
    { dataType: "player" },
    { $inc: { timesPlayed: 1 } }
  );
});

app.get("/api/updateGuessesLeft", async (req, res) => {
  await client.connect();

  db.collection("ClientData").updateOne(
    { dataType: "player" },
    { $inc: { guessesLeft: -1 } }
  );
});

app.get("/api/resetGuessesLeft", async (req, res) => {
  await client.connect();

  db.collection("ClientData").updateOne(
    { dataType: "player" },
    { $set: { guessesLeft: 5 } }
  );
});

app.post('/api/overwrite', jsonParser, async (req, res) => {
  const client = new MongoClient(process.env.MONGO_CONNECT);
  await client.connect();

  const deleteResult = await db.collection('ClientData').deleteMany({});
  console.log('Deleted documents =>', deleteResult);

  const insertResult = await db.collection('ClientData').insertMany(req.body);
  console.log('Inserted documents =>', insertResult);

  res.sendStatus(200);
})

app.post('/api/insertStats', jsonParser, async (req, res) => {
  await db.collection("ClientData").insertOne({
    guessesLeft: req.body.guessesLeft,
    timesPlayed: req.body.timesPlayed,
    wins: req.body.wins,
    winStreak: req.body.winStreak,
    dataType: req.body.dataType,
  });
})

app.post('/api/changeWordOfDay', jsonParser, async (req, res) => {
  await db.collection("wordOfDay").updateOne(
    { dataType: "wordOfDay" },
    { $set: { word: req.body.word } }
  );
})

// // WARNING - THE CODE BELOW DISABLES THE ABILITY TO RUN LOCALLY
// const httpsServer = https.createServer({
//   key: fs.readFileSync('/etc/letsencrypt/live/cp3010msproject.xyz/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/cp3010msproject.xyz/fullchain.pem'),
 
//  }, app);
 
//  httpsServer.listen(443, () => {
//          console.log("HTTPS Server running on port 443");
//  });
 
