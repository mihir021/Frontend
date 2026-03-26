http = require("http")

// create server 

http.createServer(function(req,res){
    // set status + set hader 
    res.writeHead(200,{"Content-Type":"application/json"})
    const data = {
        sub :"fsd-2",
        topic : "NodeJS"
    }
    res.end(JSON.stringify(data))
}).listen(8080,()=>{
    console.log("Server is running on port 8080")
})  