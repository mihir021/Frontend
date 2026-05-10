express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.send(`<form method="post" action="/user">
                <input type="text" name="name" placeholder="Name">
                <button type="submit">Submit</button>
              </form>`)
})

app.post("/user", (req, res) => {
    res.json({
        data:req.body
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})