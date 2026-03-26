// write a script to define 2 JSON obj div1 and div2 having an arr to store 5 int numbers
// write this obj in a file named xyx.txt file using file system 
// difile 3rd arr as a result which gives out put as expline belove 
// let 1st arr contailes base values and secound arr contailes power values 
// and then 3rd arr will give result as a output a pow(b)
// 1st arr[0] = 2 and 2nd arr[0] = 3 then irs sude return 8 in 3rd arr[0]
// also append this result in xyz.txt file as well as console 


let div1 = {
    arr : [2,3,4,5,6]
}
let div2 = {
    arr : [3,2,2,3,1]
}

let result = []

fs = require("fs")

div1S = JSON.stringify(div1)
div2S = JSON.stringify(div2)

fs.writeFileSync("18.txt",(div1S+"\n"+div2S))

for(i in div1["arr"]){
    result[i] = Math.pow(div1["arr"][i],div2["arr"][i])
}
console.log(result)
console.log("File created and content written successfully")

fs.appendFileSync("18.txt","\n"+JSON.stringify(result));


