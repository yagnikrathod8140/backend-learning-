// Express.js Framework;

// Introduction to Express.js.
// express js ek package hai
// framework
// manages everything from receiving the request and giving the response

// Setting up a basic Express application
// Routing.
// Middleware.
// Request and response handling.
// Error handling.

const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("Middleware is working");
  next()
});


app.get("/", (req, res) => {
  res.send("Hello word");
})

app.use(function (req, res, next) {
  console.log("Middleware is working for home page");
  next()
});

app.get("/home", (req, res) => {
  res.send("Hello Yagnik");
})

app.listen(3000);
