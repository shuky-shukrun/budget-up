// import express - server lib
const express = require("express");
// import cors to set CORS options to '*' easily
const cors = require("cors");
const dbOperations = require("./dbOperations");

const port = process.env.PORT || 5000;

const app = express();

// parse all requests as json
app.use(express.json());
// set cors to '*'
app.use(cors());
app.use(express.static(__dirname)); //specifies the root directory from which to serve static assets [images, CSS files and JavaScript files]

app.options("*", cors());

//DB Connection

app.get("/transactions", async (req, res) => {
  res.json(await dbOperations.getAllTransactionsByUserID(1));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});