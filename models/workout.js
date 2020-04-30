const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },
    excercises: [{
        type: {
            type: String,
            trim: true,
            required: "need an excercise"
        },
        name: {
            type: String,
            required: "enter a name"
        },
        duration: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        },
       
    }]
    
})

const Workout = mongoose.model("Exercise", workoutSchema)

module.exports = Workout;
