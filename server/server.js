const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3553;

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

// // Setup checkout request
// app.post("/checkout", async (req, res) => {
//   console.log(req.body);

//   const items = req.body.items;
//   let lineItems = [];
//   items.forEach((item) => {
//     lineItems.push({
//       price: item.id,
//       quantity: item.quantity,
//     });
//   });

//   const session = await stripe.checkout.session.create({
//     line_items: lineItems,
//     mode: "payment",
//     success_url: "http://localhost:5173/paymentcomplete",
//     cancel_url: "http://localhost:5173/cancel",
//   });

//   res.send(
//     JSON.stringify({
//       url: session.url,
//     })
//   );
// });

// Validate that the mongoose connection is complete
db.once("open", () => {
  console.log("DB connection established");

  app.listen(PORT, () => console.log("Server listening on port", PORT));
});
