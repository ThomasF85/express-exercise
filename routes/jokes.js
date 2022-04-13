import express from "express";
import { nanoid } from "nanoid";

const router = express.Router();

let jokes = [
  {
    id: "fui9Zxj2yXPy8agOBrCvn",
    joke: "Thanks for explaining the word “many” to me, it means a lot.",
  },
  {
    id: "UOwDSulXnp2qtwEPpPFHd",
    joke: "Why did Adele cross the road? To say hello from the other side.",
  },
  {
    id: "VQRSRuszkQaLBZBpZoLWp",
    joke: "What kind of concert only costs 45 cents? A 50 Cent concert featuring Nickelback.",
  },
  {
    id: "nvhGGI9AeEZKyVPDZorjQ",
    joke: "To the person who invented zero, thanks for nothing.",
  },
];

/**
 * Exercise 1
 * Create a GET /joke route, that returns all jokes.
 */
router.get("/", (req, res, next) => {
  res.status(200).json(jokes);
});

/**
 * Exercise 2
 * Create a GET /joke/:id route, that returns the joke for the given id.
 */

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  const joke = jokes.find((joke) => joke.id === id);
  if (joke) {
    res.status(200).json(joke);
  } else {
    next();
  }
});

/**
 * Exercise 3
 * Create a POST /joke route, that adds a new joke to the array.
 */

router.post("/", (req, res, next) => {
  const newJoke = { id: nanoid(), ...req.body };
  jokes.push(newJoke);
  res.status(201).json(newJoke);
});

/**
 * Exercise 4
 * Create a PATCH /joke/:id route, that updates the joke for the given id.
 */

router.patch("/:id", (req, res, next) => {
  const { id } = req.params;
  const jokeIndex = jokes.findIndex((joke) => joke.id === id);
  if (jokeIndex !== -1) {
    jokes[jokeIndex] = {
      ...jokes[jokeIndex],
      ...req.body,
    };

    res.status(200).json(jokes[jokeIndex]);
  } else {
    next();
  }
});

/**
 * Exercise 5
 * Create a DELETE /joke/:id route, that deletes the joke for the given id.
 */

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  const jokeIndex = jokes.findIndex((joke) => joke.id === id);

  if (jokeIndex === -1) {
    next();
  } else {
    jokes = jokes.filter((joke) => joke.id !== id);

    res.status(200).json({
      deletedId: id,
    });
  }
});

export default router;
