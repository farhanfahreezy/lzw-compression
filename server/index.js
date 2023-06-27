const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const History = require("./models/History");
const compress = require("./algorithms/lzw-compression");
const decompress = require("./algorithms/lzw-decompression");
const port = process.env.PORT || 5174;

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

app.get("/getHistory", async (req, res) => {
  try {
    const history = await History.find({}, { _id: 0 }).sort({ timestamp: 1 });
    res.send(history);
  } catch (err) {
    console.log(err);
  }
});

app.post("/sendQuestion", async (req, res) => {
  const question = req.body.question;
  const type = req.body.type;

  let answer;
  if (type === 1) {
    answer = compress(question);
  } else {
    answer = decompress(question);
  }

  const newHistory = new History({
    question: question,
    answer: answer,
    type: type,
  });

  newHistory
    .save()
    .then((savedHistory) => {
      const response = {
        answer: savedHistory.answer,
      };
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to save history" });
    });
});

app.get("/getAnswer", async (req, res) => {
  const question = req.query.question;

  try {
    const history = await History.findOne(
      { dialog: question },
      { _id: 0, timestamp: 0, type: 0 }
    );
    res.send(history);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
