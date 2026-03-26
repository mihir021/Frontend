// pass the url and cal the avg of 3 numbers passed as qury peramiters 

const u = require('url');
const fs = require("fs")

// process.noDeprecation = true; or  node --no-deprecation 01.js to remove the warning

const urlString = "https://localhost:8080/test?m1=50&m2=60&m3=70"

const q = u.parse(urlString,true);
m1 = parseInt(q.query.m1)
m2 = parseInt(q.query.m2)
m3 = parseInt(q.query.m3)

console.log(`Avg of m1 m2 m3 is :${(m1+m2+m3)/3}`)
