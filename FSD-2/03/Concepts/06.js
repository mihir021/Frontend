const http = require("http")
const fs = require("fs")

http.createServer(function(req,res){
    if(req.url == "/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<h1>Hello Img</h1><img src='a.png'/>")
    }else if(req.url == "/a.png"){
        const img = fs.readFileSync("a.png")
        res.writeHead(200,{"Content-Type":"image/png"})
        res.end(img)
    }
}).listen(8080,()=>{
    console.log("Server is running on port 8080")
})