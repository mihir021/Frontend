/*
 * Exercise 3: File System CRUD Operations
 *
 * Task:
 *   1. Create a folder named "node"
 *   2. Create a file "data.txt" inside it and write some data
 *   3. Append "hello student" to the file
 *   4. Read the file and display its content
 *   5. Rename the file from "data.txt" to "readWrite.txt"
 *   6. Delete the file and remove the folder
 *
 * Concepts Used:
 *   - fs.mkdirSync()      -> create directory
 *   - fs.writeFileSync()  -> write data to file
 *   - fs.appendFileSync() -> append data to file
 *   - fs.readFileSync()   -> read file content
 *   - fs.renameSync()     -> rename a file
 *   - fs.unlinkSync()     -> delete a file
 *   - fs.rmdirSync()      -> remove a directory
 *
 * How to run: node 03-file-system-crud.js
 */

const fs = require('fs');

// Step 1: Create a directory named "node"
fs.mkdirSync('node');

// Step 2: Create a file and write initial data
fs.writeFileSync('node/data.txt', 'dfghjfgh drfghfg');

// Step 3: Append additional data to the file
fs.appendFileSync('node/data.txt', 'hello student');

// Step 4: Read the file content and display it
const data = fs.readFileSync('node/data.txt', 'utf-8');
console.log(data);

// Step 5: Rename the file from data.txt to readWrite.txt
fs.renameSync('node/data.txt', 'node/readWrite.txt');

// Step 6: Delete the renamed file
fs.unlinkSync('node/readWrite.txt');

// Step 7: Remove the empty directory
fs.rmdirSync('node');
