const express = require('express');
const app = express();
const cors = require('cors');
const { Pool } = require('pg');

//middleware
app.use(cors());
app.use(express.json());

const pgClient = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

pgClient.on('connect', (client) => {
  client
    .query(
      'CREATE TABLE IF NOT EXISTS comment(comment_id SERIAL PRIMARY KEY,description VARCHAR(255));',
    )
    .catch((err) => console.log('PG ERROR', err));
});
//Routes

//create a comment

app.post('/comments', async (req, res) => {
  try {
    const { description } = req.body;
    const newComment = await pgClient.query(
      'INSERT INTO comment (description) VALUES($1) RETURNING *',
      [description],
    );

    res.json(newComment.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all comments

app.get('/comments', async (req, res) => {
  try {
    const allComments = await pgClient.query('SELECT * FROM comment');
    res.json(allComments.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// delete a comment

app.delete('/comments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteComment = await pgClient.query("DELETE FROM comment WHERE comment_id = $1", [id]);
    res.json("Comment was deleted")
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log('server has started on port 5000');
});
