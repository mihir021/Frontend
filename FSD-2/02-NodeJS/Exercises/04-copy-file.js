/*
 * Exercise 4: Copy a File Using fs.copyFileSync()
 *
 * This script copies the content of "source.txt" to "destination.txt"
 * using the synchronous copyFileSync method.
 *
 * Concepts Used:
 *   - fs.copyFileSync(source, destination) -> copies a file
 *
 * How to run: node 04-copy-file.js
 *   (Make sure "source.txt" exists in the data/ folder)
 */

const fs = require("fs")

// Copy source.txt to destination.txt
fs.copyFileSync("data/source.txt", "data/destination.txt")
console.log("File copied successfully")
