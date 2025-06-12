DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS reviews;

CREATE TABLE users (
  id serial PRIMARY KEY,
  username text NOT NULL UNIQUE,
  password text NOT NULL
);

CREATE TABLE games (
  id serial PRIMARY KEY,
  title text NOT NULL UNIQUE,
  description text NOT NULL UNIQUE
);

CREATE TABLE reviews (
  id serial PRIMARY KEY,
    game_id INT NOT NULL,
    title text NOT NULL UNIQUE,
    content text NOT NULL UNIQUE,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),

 FOREIGN KEY (game_id) REFERENCES games(id) 

);

