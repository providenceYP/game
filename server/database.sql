CREATE DATABASE forum;

CREATE TABLE comment(
  comment_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);