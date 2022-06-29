const express = require("express");

//express app
const app = express();

//port
const port = 4000;

app.get("/", (req, res, next) => {
  res.json({
    mssg: "Welcome to the app",
  });
});

//listen for a request
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
