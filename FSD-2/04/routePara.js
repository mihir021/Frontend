// Route Path: calendar/:day/event/:eventname
// Route URL: localhost:4000/calendar/monday/event/bday
//req.params =>  o/p: {"day":"monday", "eventname":"bday"}

const exp=require("express")
const app=exp()

app.get("/calendar/:day/event/:eventname",(req,res)=>{
    res.send(req.params)
})

app.listen(4000)