// Write expressJS script to perform task as asked:
// (A) Create one HTML file which contains text-field named 
// username, one dropdown which contains options of country like 
// India, USA, Canada, Australia. & one submit button.
// (B) Once user clicked on submit button it will jump to next page than 
// username & You are from “country name” which ever selected from 
// drop box should be printed.
// (C) Use POST method to request data

const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`<form method="post" action="/submit">
                <input type="text" name="username" placeholder="Username">
                <select name="country">
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                </select>
                <button type="submit">Submit</button>
              </form>`)
})

app.post("/submit", (req, res) => {
    const { username, country } = req.body
    res.send(`Username: ${username}, You are from ${country}.`)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})