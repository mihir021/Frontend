const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`<form method="post" action="/submit">
                <input type="number" name="a1" placeholder="a1">
                <input type="number" name="a2" placeholder="a2">
                <button type="submit">Submit</button>
              </form>`)
})

app.post("/submit", (req, res) => {
    const { a1, a2 } = req.body
    res.send(`The sum of ${a1} and ${a2} is ${(parseInt(a1)) + (parseInt(a2))}.`)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})