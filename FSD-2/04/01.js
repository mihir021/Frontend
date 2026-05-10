const express = require("express")
const app = express()

app.get("/data", (req, res) => {
    name = req.query.name
    age = req.query.age
    res.send(`My name is ${name} and I am ${age} years old.`)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

