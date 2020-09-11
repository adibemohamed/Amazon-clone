const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvTrF1HgyCm2C01ukKpy6QYNIakPXUhaEJg9535aGqcbmCAZaC2LG1xcgH4LOD59M7VziNPdK4XKIBOktlA8TZ00cbJLKrO3"
);

// Setup API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => {
  response.status(200).send("HELLO WOLRD");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!!!! total: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "use",
  });

  // OK - created
  response.status(201).send({
      clientSecret: paymentIntent.clientSecret
  })
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-975bf/us-central1/api
