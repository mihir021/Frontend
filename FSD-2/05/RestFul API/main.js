const express = require('express');
const app = express();

const api = require('./api1'); // module exported from api1.js

app.use('/api',api);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
