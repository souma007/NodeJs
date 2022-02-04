# Module 3 - Node - RESTful APIs

## Bibliography

- https://www.sitepoint.com/developers-rest-api/
- https://hackernoon.com/restful-api-design-step-by-step-guide-2f2c9f9fcdbf
- https://www.moesif.com/blog/api-guide/api-design-guidelines/
- https://ninenines.eu/docs/en/cowboy/2.6/guide/rest_principles/

<img src='./__lecture/assets/cafe.jpg' />

## Exercise 1 - API Architecture

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

Use [exercise-1.md](__workshop/exercise-1.md) to complete this exercise.

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

---

## Exercise 2

There is a `clients.js` file inside of the data folder.

Create RESTful endpoints in `server.js` that allow a user to access the data. Don't forget to respond with the appropriate HTTP code, including any errors that might occur.

- An endpoint to access a list of all the clients.
- An endpoint to access one client based on its `id`.
- An endpoint to add a new client.
  - a detailed validation of the data is not really required, but you can verify that the email is new.
- An endpoint to delete a customer based on its `id`.

Use Insomnia to test out these endpoints.

You can use a module [uuid](https://www.npmjs.com/package/uuid) to generate a user id. Read the documentation on how to use it.

---

<img src='./__lecture/assets/hangman.jpg' style='float:left;margin:24px 34px 6px 0;' />

## Exercise 3 - Hangman!

Let's build the backend of a Hangman Game!

Obviously, this could all be done in the frontend, but where's the fun in that! Besides, we are not very trusting and keeping the entire game in the FE would allow users to cheat, if they knew enough JavaScript to find the answer.

#### Backend

- There is a data file called `words.js` that should contain an array of words. Add more words to this file --at least 10. Each word should follow this format.

```js
{
  id: '123',
  word: 'bacon',
  letterCount: '5'
}
```

- Create an API that contains these endpoints.
  - A `/hangman/word/:id` endpoint can also accept an `id` in its url. If it's provided, it will return the word object, as it is in the array of words. _This is ONLY for testing purposes._
  - `GET /hangman/word` This will return an object that contains - the `id` of a random word selected from an array of words - the `letterCount` of the word.
  - `GET /hangman/guess/:id/:letter` This will return the appropriate status code.
  - If the letter guessed is in the word, return an array of booleans that map the letter's position in the word. This will be processed by the FE.

For example, if the server receives this request `/hangman/guess/123/o`, it should respond with a status `200` and an array `[false, false, false, true, false]`. this means that the letter 'o' is located in the fourth position in the word.

```
__ __ __ O __
```

- Once you have completed these steps, you should be able to _play_ the game via the Insomnia app to test your code.
- Grab pen and paper and test it out!

---

<center>🟢 - Complete workshop (100%) - 🟢</center>

---

## Exercise 4 (Stretch)

If you need some _more_ work for today, take a look at [Programmable Web](https://www.programmableweb.com/) for an API that has data that is _free_ and interests you.

- Test out the API in Insomnia
- If it works as expected and provides you with good data that you feel you can work with, build a few endpoints in the server to `GET` data from there and render it from a static page in the `public` folder. (this means alse creating a `fetch` to your server to `get` the data.)

Fun times!
