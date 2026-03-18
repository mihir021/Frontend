/*
 * Topic: Node.js File System (fs) - Synchronous Methods
 *
 * The 'fs' module in Node.js provides file system operations.
 * Synchronous methods block the code until the operation is complete.
 *
 * All 8 synchronous methods demonstrated below:
 *   1. fs.mkdirSync()     -> Create a directory
 *   2. fs.readFileSync()  -> Read data from a file
 *   3. fs.writeFileSync() -> Write data to a file (overwrites existing content)
 *   4. fs.appendFileSync()-> Append data to a file (adds to existing content)
 *   5. fs.renameSync()    -> Rename a file
 *   6. fs.unlinkSync()    -> Delete a file
 *   7. fs.rmdirSync()     -> Remove a directory
 *   8. fs.copyFileSync()  -> Copy a file
 *
 * How to run:  node 03-file-system-sync-methods.js
 * Note: Uncomment individual sections below to test each method.
 */

const fs = require("fs")

// --- 1. Create a directory ---
// fs.mkdirSync("myDirectory")
// console.log("Directory created successfully")

// --- 2. Read a file ---
// const data = fs.readFileSync("myDirectory/data.txt", "utf-8")
// console.log("File content:", data)

// --- 3. Write a file (creates file if it doesn't exist) ---
// fs.writeFileSync("myDirectory/myFile.txt", "Hello, World!")
// console.log("File created and content written successfully")

// --- 4. Append data to a file ---
// fs.appendFileSync("myDirectory/myFile.txt", "\nThis is additional content.")
// console.log("Content appended successfully")

// --- 5. Rename a file ---
// fs.renameSync("myDirectory/myFile.txt", "myDirectory/renamedFile.txt")
// console.log("File renamed successfully")

// --- 6. Delete a file ---
// fs.unlinkSync("myDirectory/renamedFile.txt")
// console.log("File deleted successfully")

// --- 7. Remove a directory ---
// fs.rmdirSync("myDirectory")
// console.log("Directory deleted successfully")

// --- 8. Copy a file ---
// fs.copyFileSync("myDirectory/data.txt", "myDirectory/copiedData.txt")
// console.log("File copied successfully")
