http = require("http")

// create server 

http.createServer(function(req,res){
    // set status + set hader 
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write("<h1> Hello World </h1>")
    res.end()
}).listen(8080,()=>{
    console.log("Server is running on port 8080")
})  