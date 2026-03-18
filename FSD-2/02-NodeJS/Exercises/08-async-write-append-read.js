/*
 * Exercise 8: Async write, append, and read
 *
 * Task sequence (asynchronous):
 * 1) Write initial text to data/help.txt
 * 2) Append more text to same file
 * 3) Read and print file data
 * 4) Print a final message
 */

const fs = require("fs");

fs.writeFile("data/help.txt", "you are creating a file", (err) => {
    if (err) throw err;
    console.log("Write done");

    fs.appendFile("data/help.txt", " and appending data to it", (appendErr) => {
        if (appendErr) throw appendErr;
        console.log("Content appended successfully");

        fs.readFile("data/help.txt", "utf-8", (readErr, data) => {
            if (readErr) throw readErr;
            console.log(data);
            console.log("Thanks for using my code");
        });
    });
});
