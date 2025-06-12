import db from "#db/client";


export async function createReview(title, content, rating, game_id) {
  const sql = `
  INSERT INTO reviews
    (title, content, rating, game_id)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
  `;

  const {
    rows: [review],
  } = await db.query(sql, [title, content, rating, game_id]);
  return review;
}

export async function getReviews() {
  const sql = `SELECT * FROM reviews ORDER BY id`;
  const { rows } = await db.query(sql);
  return rows;
}
export async function getReviewsByGameId(game_id) {
  const sql = `SELECT * FROM reviews WHERE game_id = $1`;
  const { rows } = await db.query(sql, [game_id]); 
  return rows;  
}
