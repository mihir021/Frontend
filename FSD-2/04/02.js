express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`<form method="post" action="/user">
                <input type="text" name="name" placeholder="Name">
                <button type="submit">Submit</button>
              </form>`)
})

app.post("/user", (req, res) => {
    const name = req.body.name
    res.send(`My name is ${name}.`)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})