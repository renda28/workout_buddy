const express = require("express");

const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

const workoutsRouter = express.Router();

//GET all workouts
workoutsRouter.get("/", getWorkouts);

//GET a single workout
workoutsRouter.get("/:id", getWorkout);

//POST a new workout
workoutsRouter.post("/", createWorkout);

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
