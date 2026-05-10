// write express js script to request server to display json array of object in table form on browser
// i/p: s1
// o/p: table having 2 columns named Name and ID. and add data from s1
const exp=require("express")
const app=exp()

s1={
    s2:[{name: "a1", id:1},
        {name: "a2", id:2},
        {name: "a3", id:3},
        {name: "a4", id:4}
    ]
}

app.get("/",(req,res)=>{
    res.type("text/html")
    res.write("<table border=2>")
    res.write("<tr><th>Name</th><th>ID</th></tr>")
    for(let i of s1.s2){
        res.write("<tr><td>"+i.name+"</td>")
        res.write("<td>"+i.id+"</td></tr>")
    }
    res.write("</table>")
    res.send()
})

app.listen(4000)