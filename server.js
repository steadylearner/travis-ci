// https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const { hello } = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// https://expressjs.com/en/guide/routing.html
app.use("/hello", hello);

module.exports = app;
