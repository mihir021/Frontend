/*
 * Topic: Node.js path module basics
 *
 * This file demonstrates useful path helpers:
 * - extname()  -> extension
 * - dirname()  -> parent folder
 * - basename() -> file name
 * - parse()    -> full path breakdown
 */

const path = require("path");

const filePath = "data/s2.txt";

console.log(path.extname(filePath)); // .txt
console.log(path.dirname(filePath)); // data
console.log(path.basename(filePath)); // s2.txt
console.log(path.parse(filePath)); // { root: '', dir: 'data', base: 's2.txt', ext: '.txt', name: 's2' }

if (path.extname(filePath) === ".txt") {
    console.log("This is a text file");
} else {
    console.log("This is not a text file");
}