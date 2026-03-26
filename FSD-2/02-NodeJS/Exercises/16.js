// using event handling perorm this task 
// 1. creat a folder named ABC
// 2. creat a file named xyz.txt and enter some data in it
// 3. append data to that file named xyz.txt and print msg data appended successfully
// 4. read the content of that file xyz.txt and print it on console
// 5. copy content of that file xyz.txt to another file named pqr.txt 
// 6. delete the file named xyz.txt and lastly print msg all operations performed successfully on console
// do all operations of fs using sync only

const fs = require("fs")
const events = require("events");

const ee = new events();

ee.on("makeFolder",function(){
    fs.mkdirSync("ABC")
    console.log("Directory created successfully")
    ee.emit("makeFile");
})

ee.on("makeFile",function(){
    fs.writeFileSync("ABC/xyz.txt", "Hello, World!")
    console.log("File created and content written successfully")
    ee.emit("append")
})

ee.on("append",function(){
    fs.appendFileSync("ABC/xyz.txt", "\nThis is additional content.")
    console.log("Content appended successfully")
    ee.emit("read")
})

ee.on("read",function(){
   const data = fs.readFileSync("ABC/xyz.txt", "utf-8")
   console.log("File content:", data)
   ee.emit("copyC")
})

ee.on("copyC",function(){
    fs.copyFileSync("ABC/xyz.txt", "ABC/pqr.txt")
    console.log("File copied successfully")
    ee.emit("del")
})

ee.on("del",function(){
    fs.unlinkSync("ABC/xyz.txt")
    console.log("File deleted successfully")
})

ee.emit("makeFolder");
console.log("all done")