const epress = require("express")
const app = epress()
const session = require("express-session")

app.use(session({secret:"mihir"}))

app.use(epress.static(__dirname,{index:'s1.html'}))

app.get('/save',(req,res)=>{
    req.session.uname = req.query.uname
    req.session.gender = req.query.gender
    res.redirect('fetchsession')
})

app.get("/fetchsession",(req,res)=>{
    res.type("text/html")
    res.write(`<h1>Username: ${req.session.uname} <br> Gender: ${req.session.gender}</h1>`)
    // res.write("<a href='/delS'>logout</a>")
    res.send()
})


