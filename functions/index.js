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
app.use(cors({ origin: true }))
app.use(express.json())


// API routes
app.get('/', (request, response) => {
    response.status(200).send('HELLO WOLRD');
})


// Listen command
exports.api = functions.https.onRequest(app);