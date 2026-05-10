const express = require('express');
const app = express();

const studentName = (req,res,next) => {
    req.name = "abc"
    console.log("Student Name Middleware");
    next();
}

const collegeName = (req,res,next) => {
    req.college = "xyz"
    console.log("College Name Middleware");
    next();
}

const addMarks = (req,res,next) => {
    req.marks = 90
    console.log("Marks Middleware");
    next();
}

app.get('/student', studentName, collegeName, addMarks, (req,res) => {
    res.send(`Student Name: ${req.name}, College Name: ${req.college}, Marks: ${req.marks}`);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})