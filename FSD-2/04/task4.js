// creat the besic web app using express 

// 1 display a form on the home page to enter users name , age , marks and city
// 2 set the form data to the server using a post req and display it on the page
// 3 the server must read the submited nam, age ,marks and city from the req body method 

const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`<form method="post" action="/submit">
                <input type="text" name="name" placeholder="Name">
                <input type="number" name="age" placeholder="Age">
                <input type="number" name="marks" placeholder="Marks">
                <input type="text" name="city" placeholder="City">
                <button type="submit">Submit</button>
              </form>`)
})

app.post("/submit", (req, res) => {
    const { name, age, marks, city } = req.body
    res.send(`My name is ${name}, I am ${age} years old, I scored ${marks} marks and I live in ${city}.`)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})