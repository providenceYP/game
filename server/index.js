const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes //
app.get("/", (req,res) => {
	res.send({
		"Get all comments":"http://localhost:5000/comments",
});
// Create
app.post("/comments", async (req, res) => {
	try {
		const { desc } = req.body;
		const strQuery =
			"INSERT INTO comment (description) VALUES('" + desc + "') RETURNING *";
		const newComment = await pool.query(strQuery);

		res.json(newComment.rows[0]);
		// console.log(req.body);
		// res.send("Welcome, " + req.body.desc);
	} catch (err) {
		console.error(err.message);
	}
});

// Read all
app.get("/comments", async (req, res) => {
	try {
		const strQuery = "SELECT * FROM comment";
		const allComments = await pool.query(strQuery);

		res.json(allComments.rows);
		// console.log(req.body);
		// res.send("Welcome, " + req.body.desc);
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(5000, () => {
	console.log("Server has started on port 5000");
});
