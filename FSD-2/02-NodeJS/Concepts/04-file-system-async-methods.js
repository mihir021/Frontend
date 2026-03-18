/*
 * Topic: Node.js File System (fs) - Asynchronous Methods
 *
 * These examples show common async fs operations.
 * Keep only one block active at a time while practicing.
 *
 * Run: node 04-file-system-async-methods.js
 */

const fs = require("fs");

// 1) Create a folder
// fs.mkdir("../data/MyFolder", (err) => {
//   if (err) throw err;
//   console.log("Folder created");
// });

// 2) Read a file
// fs.readFile("../data/MyFolder/c1.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// 3) Write a file
// fs.writeFile("../data/MyFolder/c1.txt", "Hello", (err) => {
//   if (err) throw err;
//   console.log("Write done");
// });

// 4) Append data
// fs.appendFile("../data/MyFolder/c1.txt", " world", (err) => {
//   if (err) throw err;
//   console.log("Append done");
// });

// 5) Rename a file
// fs.rename("../data/MyFolder/newName", "../data/MyFolder/newName.txt", (err) => {
//   if (err) throw err;
//   console.log("Rename done");
// });

// 6) Delete a file
// fs.unlink("../data/MyFolder/newName.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted");
// });

// 7) Remove a folder
// fs.rmdir("../data/MyFolder", (err) => {
//   if (err) throw err;
//   console.log("Folder removed");
// });

// 8) Copy a file (active example)
fs.copyFile("../data/myDirectory/data.txt", "../data/myDirectory/copiedData.txt", (err) => {
    if (err) throw err;
    console.log("File copied successfully");
});