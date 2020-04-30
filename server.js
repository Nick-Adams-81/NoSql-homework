//Dependencies
const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")
//PORT 9000
const PORT = process.env.PORT || 9000

const app = express()

//Setting up mongoose models
const Workout = require("./models/workout")


//Express setup
app.use(logger("dev"))
app.use(express.urlencoded({ extend: true }))
app.use(express.json())

app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

require("./routes/api-routes")(app)
require("./routes/html-routes")(app)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})