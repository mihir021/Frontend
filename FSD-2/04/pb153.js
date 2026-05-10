// Write an expressJS code which loads login.html file upon browsing 
// localhost:3010. The Login.html file contains input for 
// username,password and two checkboxes named remember and 
// subscribe,on submitting the file it should go to /data page where 
// username,password and selected checkboxes are pinted,in addition to 
// that a logout button should be there,onclicking this button it should 
// go back to home page “localhost:3010/”.(GET/POST any method can 
// be used)[Write all necessary files code

const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`<form method="post" action="/data">
                <input type="text" name="username" placeholder="Username">
                <input type="password" name="password" placeholder="Password">
                <label><input type="checkbox" name="remember"> Remember Me</label>
                <label><input type="checkbox" name="subscribe"> Subscribe to Newsletter</label>
                <button type="submit">Login</button>
              </form>`)
})

app.post("/data", (req, res) => {
    const { username, password, remember, subscribe } = req.body
    res.send(`Username: ${username}, Password: ${password}, Remember Me: ${remember ? 'Yes' : 'No'},
         Subscribe: ${subscribe ? 'Yes' : 'No'}<br>
         <a href="/"><button>logout</button></a>`)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
