const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "Admin@123",
	host: "localhost",
	port: "5432",
	database: "forum",
});

module.exports = pool;
