const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.oq9qa.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error on connecting Database"));

db.once("open", function () {
  console.log("connected to database");
});

module.exports = db;
