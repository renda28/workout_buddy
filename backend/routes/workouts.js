const express = require("express");

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const workoutsRouter = express.Router();

//GET all workouts
workoutsRouter.get("/", getWorkouts);

//GET a single workout
workoutsRouter.get("/:id", getWorkout);

//POST a new workout
workoutsRouter.post("/", createWorkout);

//UPDATE a new workout
workoutsRouter.patch("/:id", updateWorkout);

//DELETE a workout
workoutsRouter.delete("/:id", deleteWorkout);

module.exports = workoutsRouter;
