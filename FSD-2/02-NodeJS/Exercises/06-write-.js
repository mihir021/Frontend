// write node js script to write the txt this is data to new.txt file
// after that append the txt that is data to same new.txt file after that read the file 
// and print the file content to console after finish read opration print 
// the line thank you for using microgram write append and read squence must be maintain and 
// all opration are sysnchronous opration

const fs = require('fs')

fs.writeFileSync('data/new.txt','this is data')

fs.appendFileSync('data/new.txt', 'txt that is data');

data = fs.readFileSync('data/new.txt','utf8')

console.log(data)
console.log('Thank you')