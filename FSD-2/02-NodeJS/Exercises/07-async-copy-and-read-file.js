/*
 * Exercise 7: Async copy and read file
 *
 * Task:
 * 1) Copy content from source.txt to copiedData.txt
 * 2) Read copiedData.txt
 * 3) Print copied content in console
 */

const fs = require("fs");

fs.copyFile("data/source.txt", "data/copiedData.txt", (err) => {
    if (err) throw err;
    console.log("File copied successfully");

    fs.readFile("data/copiedData.txt", "utf-8", (readErr, data) => {
        if (readErr) throw readErr;
        console.log("Copied file content:");
        console.log(data);
    });
});



