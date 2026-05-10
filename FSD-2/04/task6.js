// creat a web server 
// 1 get req with dinamic user id in the url 
// 2 also add aditional data anme and age using query params
// 3 extracts id from the roote paramiters and name and age from the query string
// 4 return a json response containing all resived data

const express = require("express")
const app = express()

app.get("/user/:id", (req, res) => {
    const id = req.params.id
    const name = req.query.name
    const age = req.query.age
    res.json({
        id: id,
        name: name,
        age: age
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})  