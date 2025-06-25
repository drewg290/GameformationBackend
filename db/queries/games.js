import db from "#db/client";

export async function createGame(title, description) {
  const sql = `
  INSERT INTO games
    (title, description)
  VALUES
    ($1, $2)
  RETURNING *
  `;

  const {
    rows: [game],
  } = await db.query(sql, [title, description]);
  return game;
}

export async function getGames() {
  const sql = `SELECT * FROM games ORDER BY id`;
  const { rows } = await db.query(sql);
  return rows;
}

export async function getGameById(id) {
  const sql = `
  SELECT *
  FROM games
  WHERE id = $1
  `;
  const {
    rows: [game],
  } = await db.query(sql, [id]);
  return game;
}
