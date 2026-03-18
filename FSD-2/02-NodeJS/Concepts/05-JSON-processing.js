/*
 * Topic: JSON processing with Node.js
 *
 * Steps:
 * 1) Create a JavaScript array of student objects.
 * 2) Convert it to JSON string and store in student.txt.
 * 3) Read the file again and parse JSON back to object.
 */

const fs = require("fs");

const students = [
  { name: "abc", age: 30 },
  { name: "xyz", age: 20 },
];

fs.writeFileSync("../data/student.txt", JSON.stringify(students));

const fileData = fs.readFileSync("../data/student.txt", "utf-8");
const parsedStudents = JSON.parse(fileData);

console.log(parsedStudents);
