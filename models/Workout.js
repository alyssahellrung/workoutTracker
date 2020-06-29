const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: String,
      trim: true,
      required: "Choose resistance or cardio"
    },
    {
      name: String,
      trim: true,
      required: "Enter the name of your exercise"
    },
    {
      duration: Number,
      required: true
    },
    {
      weight: Number
    },
    {
      reps: Number
    },
    {
      sets: Number
    },
    {
      distance: Number
    }
  ]  
},
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;