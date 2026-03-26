const u = require('url');
const fs = require("fs")

// process.noDeprecation = true; or  node --no-deprecation 01.js to remove the warning

const urlString = "https://localhost:8080/defult.html?year=2024&month=feb"

const q = u.parse(urlString,true); // or if you not give true then you did not need to stringify

data = q.query;
data = JSON.stringify(data)

fs.writeFileSync("myFile.txt", data)

