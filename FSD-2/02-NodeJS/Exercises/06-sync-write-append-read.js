/*
 * Exercise 6: Synchronous write, append, and read
 *
 * Task sequence (synchronous):
 * 1) Write "this is data" to data/new.txt
 * 2) Append extra text to same file
 * 3) Read and print full content
 * 4) Print a thank-you message
 */

const fs = require("fs");

fs.writeFileSync("data/new.txt", "this is data");
fs.appendFileSync("data/new.txt", " txt that is data");

const data = fs.readFileSync("data/new.txt", "utf8");

console.log(data);
console.log("Thank you for using this script");