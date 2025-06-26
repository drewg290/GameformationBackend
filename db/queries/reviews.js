import db from "#db/client";

export async function createReview(title, content, rating, game_id, user_id) {
  const sql = `
    INSERT INTO reviews
      (title, content, rating, game_id, user_id)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING *
  `;
  const {
    rows: [review],
  } = await db.query(sql, [title, content, Number(rating), game_id, user_id]);
  return review;
}

export async function getReviews() {
  const sql = `SELECT * FROM reviews ORDER BY id`;
  const { rows } = await db.query(sql);
  return rows;
}
export async function getReviewsByGameId(game_id) {
  const sql = `
    SELECT r.*, u.username 
    FROM reviews r
    JOIN users u ON r.user_id = u.id
    WHERE r.game_id = $1
    ORDER BY r.id
  `;
  const { rows } = await db.query(sql, [Number(game_id)]);
  return rows;
}
