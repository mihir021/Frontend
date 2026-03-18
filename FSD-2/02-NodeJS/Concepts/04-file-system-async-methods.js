const fs = require('fs')

// to make a folder 
// fs.mkdir('../data/MyFolder',(err)=>{
//     if(err) throw err;
//     console.log('folder created :) ')
// })

// fs.readFile('../data/MyFolder/c1.txt','utf8',(err,data)=>{
//     if (err) throw err;
//     console.log(data)
// })

// fs.writeFile('../data/MyFolder/c1.txt','hellooooo',(err)=>{
//      if (err) throw err;
//      console.log('done')
// })

// fs.appendFile('../data/MyFolder/c1.txt',' helloooooi',(err)=>{
//      if (err) throw err;
//      console.log('done')
// })

// fs.rename('../data/MyFolder/newName','../data/MyFolder/newName.txt',(err)=>{
//      if (err) throw err;
//      console.log('done')
// })

// fs.unlink('../data/MyFolder/newName.txt',(err)=>{
//      if (err) throw err;
//      console.log('done')
// })

// fs.rmdir('../data/MyFolder',(err)=>{
//      if (err) throw err;
//      console.log('done')
// })

fs.copyFile("../data/myDirectory/data.txt", "../data/myDirectory/copiedData.txt",(err)=>{
    if (err) throw err;
    console.log("File copied successfully")
})