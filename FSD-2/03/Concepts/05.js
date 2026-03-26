http = require("http")

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"txt/html"})
    res.write(req.url+"<br>")
    res.end("url fetched")
}).listen(8080,()=>{
    console.log("Server is running on port 8080")
})