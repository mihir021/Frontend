/*
 * Exercise 5: Read Data from File and Sort in Ascending Order
 *
 * Task:
 *   1. Read numbers from a text file (numbers.txt)
 *   2. Split the data by spaces into an array
 *   3. Sort the array in ascending order using .sort()
 *   4. Display the sorted result
 *
 * Concepts Used:
 *   - fs.readFileSync() -> read file content
 *   - String.split()    -> convert string to array
 *   - Array.sort()      -> sort with comparator function
 *
 * How to run: node 05-read-and-sort-numbers.js
 *   (Make sure "numbers.txt" exists in the data/ folder)
 */

const fs = require('fs');

// Step 1: Read the file content
const data = fs.readFileSync('data/numbers.txt', 'utf-8');

// Step 2: Split the string by spaces into an array
dataArr = data.split(' ');

// Step 3: Sort in ascending order (a - b gives ascending)
const sortedArr = dataArr.sort((a, b) => a - b);

// Step 4: Display the sorted array
console.log(sortedArr);
