const { words } = require("../data/words");

// write your handlers here...
const getWordById = (req, res) => {
  const wordId = req.params.id;
  const word = words.find((word) => {
    return word.id === wordId;
  });
  word
    ? res.status(200).json({ status: 200, data: word })
    : res.status(404).json({ status: 404, message: "word not found" });
};

const getRandomWord = (req, res) => {
  const randomWord = Math.floor(Math.random() * words.length);
  console.log(randomWord);
  const word = words[randomWord];
  const object = { id: word.id, letterCount: word.letterCount };
  res.status(200).json({ status: 200, data: object });
};

const guessLetter = (req, res) => {
  const wordId = req.params.id;
  const letter = req.params.letter;
  const wordObject = words.find((word) => {
    return word.id === wordId;
  });
  const letters = wordObject.word.split("");
  const results = letters.map((letterWord) => {
    return letterWord === letter;
  });

  res.status(200).json({ status: 200, data: results });
};

module.exports = { getWordById, getRandomWord, guessLetter };
