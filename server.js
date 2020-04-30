//Dependencies
const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")
//PORT 9000
const PORT = process.env.PORT || 9000

const app = express()

//Express setup
app.use(logger("dev"))
app.use(express.urlencoded({ extend: true }))
app.use(express.json())

app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds343127.mlab.com:43127/heroku_jpgbf6pb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

require("./routes/api-routes")(app)
require("./routes/html-routes")(app)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})