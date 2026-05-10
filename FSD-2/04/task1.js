// write express js script to request server to display only age on browser using
// write,send and json method. for diff request /a1,/a2,/a3

const exp=require("express")
const app=exp()

stud={name:"ABC", age:20}
app.get("/a1",function(req,res){
    res.type("application/json")
    res.write(JSON.stringify(stud.age))
    res.send()

})
app.get("/a2",function(req,res){
    res.type("application/json")
    res.send(stud.age) 
})
app.get("/a3",function(req,res){
    res.type("application/json")
    res.json(stud.age)

})
app.listen(4040)