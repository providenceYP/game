const keys = require("./keys");
const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password: "peeranat123",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;