const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const History = require("./models/History");

app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://lwzusername:mxXYro6wQRj4Qlps@lzwcompression.8kcrjiq.mongodb.net/lzwhistory?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/test", async (req, res) => {
  const history = {
    isQuestion: false,
    dialog: "Jawban Tiga",
    timestamp: Date.now(),
  };

  try {
    // const database = client.db("lzwhistory");
    const histories = database.collection("histories");
    const result = await histories.insertOne(history);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
});

app.get("/getHistory", async (req, res) => {
  try {
    const history = await History.find({}, { _id: 0 }).sort({ timestamp: 1 });
    res.send(history);
  } catch (err) {
    console.log(err);
  }
});

app.get("/addDummy", async (req, res) => {
  const history = {
    isQuestion: true,
    dialog: "Pertanyaan Satu",
    type: 0,
    timestamp: Date.now(),
  };
  try {
    const history = await History.find({}, { _id: 0 }).sort({ timestamp: 1 });
    res.send(history);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5174, () => {
  console.log("Server running on port 5174");
});
