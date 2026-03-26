const fs = require("fs")
const u = require('url');
const path = require("path");

const urlString = "https://abc.com/data.txt?m1=Congo&m2=Node+Test&m3=Best#Done"
const q = u.parse(urlString,true);

myPath = path.basename(q.pathname)

data1 = q.query.m1;
data2 = q.query.m2;
data3 = q.query.m3;

fs.writeFileSync(myPath , data1 +"\n"+data2+"\n"+data3)

console.log(data2)
