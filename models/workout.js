const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Type exercise name"
      },
      duration: {
        type: Number,
        required: "Type exercise duration (minutes)"
      },
      distance: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      weight: {
        type: Number
      }
    }
  ]
},
{
  toJSON: {
    virtuals: true
  }
}
);

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;