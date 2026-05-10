const exp=require("express")
const app=exp()

stud={name:"ABC", age:20}
app.get("/",function(req,res){
    res.type("application/json")

    // method-1
    //res.write(JSON.stringify(stud))
    //res.send() // res.end() both are valid but empty

    // in m2 & m3: no need to use STRINGIFY, it will directly convert object to string
    //method-2
    //res.send(stud) // directly converts object to string

    //method-3
    res.json(stud)

})
app.listen(4000)