const Sequelize = require("sequelize");
require("dotenv").config()
console.log("Database Dialect:", process.env.DATABASE_USERNAME);
const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
  port: process.env.DATABASE_PORT,
});
module.exports = sequelize;
