const express = require("express");
const workoutModel = require("../models/workout");

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
workoutsRouter.post("/", async (req, res, next) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await workoutModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
