// write node js program to create a file named test.txt containing the intial txt "exam attempted "
// then its must add 3 more line to the file
//  "Enter one pass",
//  "Enter two fail",
//  "Enter three pass"
//  after writing the program must read the file and count how many times the word pass apiered
//  and if the word pass apiers 3 or more times the program shode erac the contaien in side test.txt
//  sync

const fs = require("fs")

fs.writeFileSync("test.txt", "exam attempted")
console.log("File created and content written successfully")

fs.appendFileSync("test.txt", "\n Enter one pass , \n Enter two pass , \n Enter three pass")
console.log("Content appended successfully")

const data = fs.readFileSync("test.txt", "utf-8")
console.log("File content:", data)

let c = 0

newData = data.split(" ")

for (let i in newData){
    if(newData[i]=="pass"){
        c += 1
    }
}
console.log(c)

if(c >= 3){
    fs.writeFileSync("test.txt", "")
    console.log("data removed from file ")
}
