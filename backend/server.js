require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutsRouter = require("./routes/workouts");

//express app
const app = express();

//port
const port = process.env.PORT;

//attach

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutsRouter);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to db");
    //listen for a request
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
