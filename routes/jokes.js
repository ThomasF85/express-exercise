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
  // …
});

/**
 * Exercise 2
 * Create a GET /joke/:id route, that returns the joke for the given id.
 */

// …

/**
 * Exercise 3
 * Create a POST /joke route, that adds a new joke to the array.
 */

// …

/**
 * Exercise 4
 * Create a PATCH /joke/:id route, that updates the joke for the given id.
 */

// …

/**
 * Exercise 5
 * Create a DELETE /joke/:id route, that deletes the joke for the given id.
 */

// …

export default router;
