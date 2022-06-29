require("dotenv").config();

const express = require("express");
const workoutsRouter = require("./routes/workouts");

// express app
const app = express();

// port
const port = process.env.PORT;

//attach

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutsRouter);

// listen for a request
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
