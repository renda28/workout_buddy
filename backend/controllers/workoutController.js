const workoutModel = require("../models/workoutModel");

//get all workouts
const getWorkouts = async (req, res, next) => {
  const workouts = await workoutModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//get a single workout
const getWorkout = async (req, res, next) => {
  const { id } = req.params;

  const workout = await workoutModel.findById(id);

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

//create new workout
const createWorkout = async (req, res, next) => {
  const { title, load, reps } = req.body;
  //add doc to db
  try {
    const workout = await workoutModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout

//update a workout

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
};
