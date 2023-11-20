const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3553;
const is_prod = process.env.NODE_ENV === "production";
const path = require("path");

require("dotenv").config();

const user_routes = require("./routes/user_routes");

const db = require("./config/connection");

app.use(cors());
app.use(express.static("public"));

// Open channel for JSON to be sent from client
app.use(express.json());

// Open cookie middleware channel so we can view cookies on the request object
app.use(cookieParser());

// Load Routes
app.use("/auth", user_routes);

// Share dist when in production
if (is_prod) {
  app.use(express.static(path.join(__dirname, "../client/dist")));
}

// Validate that the mongoose connection is complete
db.once("open", () => {
  console.log("DB connection established");

  app.listen(PORT, () => console.log("Server listening on port", PORT));
});
