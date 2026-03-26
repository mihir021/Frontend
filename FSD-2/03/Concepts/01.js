const u = require('url');

// process.noDeprecation = true; or  node --no-deprecation 01.js to remove the warning

const urlString = "https://localhost:8080/defult.html?year=2024&month=feb"

const q = u.parse(urlString,true);

console.log(q);
console.log(q.protocol);
console.log(q.host);
console.log(q.pathname);
console.log(q.query);
console.log(q.query.year);
console.log(q.query.month);
// cheak year is leap year or not
const year = q.query.year;
if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} is not a leap year`);
}