//Dependencies
const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")
//PORT 9000
const PORT = process.env.PORT || 9000

const app = express()

//Setting up mongoose models
const db = require("./models")


//Express setup
app.use(logger("dev"))
app.use(express.urlencoded({ extend: true }))
app.use(express.json())

app.use(express.static("public"))

//Routes

app.post("/api/workouts", ({body}, res) => {
    db.Cardio.create(body)
    .then(dbCardio => {
        res.json(dbCardio)
    })
    .catch(err =>{
        res.json(err)
    })
});
app.post("/api/workouts", ({body}, res) => {
    db.Resistance.create(body)
    .then(dbResistance => {
        res.json(dbResistance)
    })
    .catch(err =>{
        res.json(err)
    })
});


app.get("/api/workouts", (req ,res ) => {
    db.Cardio.find({})
    .then(dbCardio => {
        res.json(dbCardio)
    })
    .catch(err => {
        res.json(err)
    })
})
app.get("/api/workouts", (req ,res ) => {
    db.Resistance.find({})
    .then(dbResistance => {
        res.json(dbResistance)
    })
    .catch(err => {
        res.json(err)
    })
})

app.put("/api/workouts/:id", (req, res) => {
    console.log(req, res)
    db.Cardio.update({
        where: {
            id: req.body.id
        }
    }).then(dbCardio => {
        res.json(dbCardio)
    })
})
app.put("/api/workouts/:id", (req, res) => {
    console.log(req, res)
    db.Resistance.update({
        where: {
            id: req.body.id
        }
    }).then(dbResistance => {
        res.json(dbResistance)
    })
})

//Setting up connection to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParseer: true, useFindAndModify: false})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})