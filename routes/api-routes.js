const router = require("express").Router();
const db = require("../models");

  router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .sort({ day: -1 })
      .limit(1)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate({ _id: req.params.id },
      { $push: { exercises: req.body } }, 
      { new: true, upsert: true })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

module.exports = router;