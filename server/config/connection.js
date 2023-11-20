const mongoose = require("mongoose");

const is_prod = process.env.PORT;

mongoose.connect(
  is_prod ? process.env.DB_URL : "mongodb://127.0.0.1:27017/sistine_db"
);

module.exports = mongoose.connection;
