"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  getClients,
  getClientbyId,
  addClient,
  deleteClient,
} = require("./handlers/clientHandlers");

const {
  getWordById,
  getRandomWord,
  guessLetter,
} = require("./handlers/hangmanHandlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get("/clients", getClients)
  .get("/clients/:id", getClientbyId)
  .post("/clients/", addClient)
  .delete("/clients/:id", deleteClient)
  //Hangman endpoints
  .get("/hangman/word/:id", getWordById)
  .get("/hangman/word", getRandomWord)
  .get("/hangman/guess/:id/:letter", guessLetter)

  .listen(8000, () => console.log(`Listening on port 8000`));
