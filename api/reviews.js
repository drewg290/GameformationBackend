import express from "express";
const router = express.Router();
export default router;

import { createReview, getReviewsByGameId } from "#db/queries/reviews";
import requireBody from "#middleware/requireBody";

router.route("/:game_id").get(async (req, res) => {
  try {
    const { game_id } = req.params;
    const reviews = await getReviewsByGameId(game_id);
    return res.status(200).json(reviews); // Changed from send() to json()
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return res.status(500).json({ 
      error: "Failed to fetch reviews",
      details: error.message 
    });
  }
});

router.route("/")
  .post(
    requireBody(["title", "content", "rating", "game_id"]),
    async (req, res) => {
      const { title, content, rating, game_id } = req.body;
      const user_id = req.user.id;  
      const review = await createReview(
        title,
        content,
        rating,
        game_id,
        user_id
      );
      res.status(201).send(review);
    }
  );