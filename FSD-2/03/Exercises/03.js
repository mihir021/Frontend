// write a node js progrma that uses the url module to pass qury peramiters from the follwing url 
// 1. the sarver shode extract the value of name and cource 

const u = require('url');

const urlString = "https://localhost:8080/?name=abc&course=NodeJS"
const q = u.parse(urlString,true);

console.log(q.query.name)
console.log(q.query.course)

