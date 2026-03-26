// Using Event handling file write,append and read the data on console

const events = require('events');
const fs = require('fs');

const ee = new events();

ee.on("write",function(){
    fs.writeFile("b.txt","Hello World",function(err){
        if(err) throw err;
        console.log("File written successfully");
        ee.emit("append");
    })
})

ee.on("append",function(){
    fs.appendFile("b.txt"," appened somthing ",function(err){
        if(err) throw err;
        console.log("Data appended successfully");
        ee.emit("read");
    })
})


ee.on("read",function(){
    fs.readFile("b.txt","utf8",function(err,data){
        if(err) throw err;
        console.log("File content: ",data);
    })
})

ee.emit("write");
