// write express js script to define 1 json array of three objects having properties name and age
// sort this object acc to age if user request /sortedName in url all names along with age should to printed acc to desc order of age
// also display this sorted values on /sort page and display json object on / page

// same as PB154
// age->height

const exp=require("express")
const app=exp()

stud=[{name:"abc",age:20},{name:"xyz",age:50},{name:"pqr",age:10}]

app.get("/",(req,res)=>{
    res.type("application/json")
    for(let i of stud){
        res.write(JSON.stringify(i))
    }
    res.send()
})

app.get("/sortedName",(req,res)=>{
    s=stud.sort((a,b)=>(b.age-a.age))
    res.type("application/json")
    for(let i of s){
        res.write(JSON.stringify(i))
    }
    res.send()
})
app.listen(4000)