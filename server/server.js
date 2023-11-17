const express = require("express");

const app = express();
const PORT = process.env.PORT || 3553;

const user_routes = require("./routes/user_routes");

app.use(express.json());

// Load Routes
app.use("/auth", user_routes);

app.listen(PORT, () => console.log("Server Listening on port", PORT));
