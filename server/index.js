const express = require("express");
const app = express();
const cors = require("cors");
const { Pool } = require("pg");
const keys = require("./keys")

//middleware
app.use(cors())
app.use(express.json());

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on("connect", client => {
  client
    .query("CREATE TABLE IF NOT EXISTS todo(todo_id SERIAL PRIMARY KEY,description VARCHAR(255));")
    .catch(err => console.log("PG ERROR", err));
});
//Routes


//create a todo

app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pgClient.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message);
    }
});

//get all todos

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pgClient.query("SELECT * FROM todo")
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message)
    }
})

//get a todo

app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const todo = await pgClient.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0])
    } catch (err) {
        console.error(err.message);
    }
})

//update a todo

app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pgClient.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, id]);

        res.json("Todo was updated")
    } catch (err) {
        console.error(err.message);
    }
})

//delete a todo

app.delete("/todos/:id", async(req,res) =>{
    try {
        const { id } = req.params;
        const deleteTodo = await pgClient.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted")
    } catch (err) {
        console.error(err.message);
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000");
})