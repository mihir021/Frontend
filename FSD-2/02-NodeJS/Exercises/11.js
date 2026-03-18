// write a nod ejs script that performs the following operations using the path module and the aync file system module
// 1. for a given file path, extract the directory name using path module
// 2. creat the extracted directory in side an existing folder using fs module
// 3. extract the file name from the given file path using path module
// 4. create that file inside the newly created directory and write some data into it
// 5. copy the content of this file to another file 
// 6. delete the original file after copying the content all operations should be performed using async methods of fs module 

fs = require("fs")
path = require("path")
static = "../data/"
fullP = (static+'ABC/')
fs.mkdir(fullP,(err)=>{
    if(err) throw err;
    console.log('folder created :) ')
    console.log(path.dirname(fullP)); 
    
    fs.writeFile(fullP+"ex1.txt",'hellooooo',(err)=>{
        if (err) throw err;
        console.log(path.basename(fullP+"ex1.txt")); // s2.txt
        console.log('write done ')

        fs.readFile(fullP+"ex1.txt",'utf8',(err,data)=>{
            if (err) throw err;

            fs.writeFile(fullP+"ex2.txt",data,(err)=>{
                if (err) throw err;
                console.log('write done in 2nd file ')
                
                    fs.unlink(fullP+"ex1.txt",(err)=>{
                    if (err) throw err;
                    console.log('file 1 delted ')
                })

            })
        })
    })
})


