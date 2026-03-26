// write node js script to perform task as ask 
// 1. cerate one page with two links home and about 
// 2. both pages must contaies html type containedt and add reuired containent on both the pages 
// 3. if user add any other url path then he or shw will be redirected to the page and txt msg will be displayed of page not found

const http = require("http")
const fs = require("fs")

http.createServer(function(req,res){
    if(req.url == "/home"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write("<h1>Hello from home </h1>")
        res.end("<a href='http://localhost:8080/home'> home </a> <br> <a href='http://localhost:8080/about'> about </a> ")
    }else if(req.url == "/about"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write("<h1>Hello from about</h1> ")
        res.end("<a href='http://localhost:8080/home'> home </a> <br> <a href='http://localhost:8080/about'> about </a> ")
    }else{
        res.writeHead(400,{"Content-Type":"text/html"})
        res.end("page not found ")
    }
}).listen(8080,()=>{
    console.log("Server is running on port 8080")
})