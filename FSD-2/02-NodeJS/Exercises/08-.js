// write a node js script to write the txt "you are creating a file"
// to hepl.txt file after this append the txt "and appending data to " 
// same help.txt file after this read the data from help.txt file and print it in console
// after finishing read opration print the line "thx for using my code" in console
// Note : write apend and read sycvanc must be mantained all opration are asyncronusly using fs module

const fs = require('fs')

fs.writeFile('data/help.txt','you are creating a file',(err)=>{
     if (err) throw err;
     console.log('done')

    fs.appendFile('data/help.txt',' and appending data to ',(err)=>{
         if (err) throw err;
            console.log("Content appended successfully")

            fs.readFile("data/help.txt" , 'utf-8',(err,data)=>{
            if (err) throw err;
            console.log(data)
            console.log("thx for using my code")
        })
    })
})
