import express from "express";
const router = express.Router();
export default router;

import { createReview, getReviewsByGameId } from "#db/queries/reviews";
import requireBody from "#middleware/requireBody";

router.route("/:game_id").get(async (req, res) => {
  const { game_id } = req.params;
  const orders = await getReviewsByGameId(game_id);
  return res.status(200).send(orders);
});

router
  .route("/:game_id")
  .post(
    requireBody(["title", "content", "rating", "game_id"]),
    async (req, res) => {
      const { title, content, rating, game_id } = req.body;
      const review = await createReview(title, content, rating, game_id);

      res.status(201).send(review);
    }
  );
