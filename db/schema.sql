DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS games CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;

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
  game_id integer NOT NULL REFERENCES games(id),
  user_id integer NOT NULL REFERENCES users(id),  
  title text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5)
);

