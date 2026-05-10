// clg calss room system using middelwear 

// when i student visits /classroom 

// 1 log that studet enter the campus 
// 2 verify the student has valid id card (boolean value)
// 3 if valid allow entry and display welcome message
// 4 if not valid deny entry and display

const express = require('express');
const app = express();

const logEntry = (req,res,next) => {
    console.log("Student entered the campus");
    next();
}

const verifyIdCard = (req,res,next) => {
    const hasValidIdCard = true; // Change this to false to test invalid case
    if(hasValidIdCard){
        next();
    } else {
        res.send("Entry denied. Invalid ID card.");
    }
}

app.get('/classroom', logEntry, verifyIdCard, (req,res) => {
    res.send("Welcome to the classroom!");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})