const mongoose = require("mongoose");
const config= require('dotenv').config();
const mongo_uri = process.env.MONGOURI;

mongoose.connect(mongo_uri);

const db = mongoose.connection;

db.once("error", (error) => console.error("Error connecting to DB", error));
db.once("open", () => console.log("Connected to DB"));

module.exports = db;
