const knex = require("knex");
const client = knex({
    client: "pg",
    connection: {
        host: process.env.PG_HOST || "localhost",
        port: process.env.PG_PORT || "5432",
        user: process.env.PG_USER || "codegem",
        password: process.env.PG_PASSWORD || "codegem",
        database: process.env.PG_DB || "codegem"
    }
});

module.exports = client;