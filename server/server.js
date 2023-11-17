const express = require("express");

const app = express();
const PORT = process.env.PORT || 3553;

const user_routes = require("./routes/user_routes");

const db = require("./config/connection");

app.use(express.json());

// Load Routes
app.use("/auth", user_routes);

// Validate that the mongoose conenction is complete
db.once("open", () => {
  console.log("DB connection established");
  app.listen(PORT, () => console.log("Server Listening on port", PORT));
});
