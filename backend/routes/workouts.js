const express = require("express");

const workoutsRouter = express.Router();

//GET all workouts
workoutsRouter.get("/", (req, res, next) => {
  res.json({
    mssg: "GET all workouts",
  });
});

//GET a single workout
workoutsRouter.get("/:id", (req, res, next) => {
  res.json({
    mssg: "GET a single workout",
  });
});

//POST a new workout
workoutsRouter.post("/", (req, res, next) => {
  res.json({
    mssg: "POST a new workout",
  });
});

//UPDATE a new workout
workoutsRouter.patch("/:id", (req, res, next) => {
  res.json({
    mssg: "UPDATE a workout",
  });
});

//DELETE a workout
workoutsRouter.delete("/:id", (req, res, next) => {
  res.json({
    mssg: "DELETE a workout",
  });
});

module.exports = workoutsRouter;
