const exp=require('express');
const app=exp()

//routing
app.get("/",(req,res)=>{
    //res.set("content-type","text/html")
    res.type("text/html")

    res.send("<h1>Hello World</h1>")
})
app.listen(3030,()=>{console.log("......")})