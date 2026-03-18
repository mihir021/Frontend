// write a node js script to copy contenat of one file to another file data shode be facth from 
// source.txt and insert to destonation.txt and read data from dastination file in the end 
// perform this all task asyncronusly using fs module 

const fs = require('fs')

fs.writeFile('../data/c1.txt','hellooooo',(err)=>{

     if (err) throw err;
     console.log('done')

        fs.copyFile("../data/c1.txt", "../data/copiedData.txt",(err)=>{
             if (err) throw err;
                console.log("File copied successfully")

                fs.readFile("../data/copiedData.txt" , 'utf-8',(err,data)=>{
                if (err) throw err;
                console.log(data)
                
            })
        })
})



