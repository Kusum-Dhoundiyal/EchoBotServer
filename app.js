var express = require('express');
var app = express();
var port = 8080;
const botRouter = require("./router/botRouter");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/bot", botRouter);
app.listen(port, err => {
    if (err) {
      return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
  });

  app.get("/", (req, res) => {
    res.send("Welcome to echo bot");
  });
   