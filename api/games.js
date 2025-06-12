import express from "express";
const router = express.Router();
export default router;

import { createGame, getGameById, getGames } from "#db/queries/games";
import requireBody from "#middleware/requireBody";
import { createToken } from "#utils/jwt";

router.route("/").get(async (req, res) => {
  const games = await getGames();
  res.send(games);
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const orders = await getGameById(req.params.id);
  return res.status(200).send(orders);
});
