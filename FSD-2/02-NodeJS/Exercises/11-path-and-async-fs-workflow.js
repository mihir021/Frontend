/*
 * Exercise 11: path module + async fs workflow
 *
 * Steps:
 * 1) Build a directory path and create it
 * 2) Create ex1.txt and write data
 * 3) Read ex1.txt
 * 4) Copy content to ex2.txt
 * 5) Delete ex1.txt
 */

const fs = require("fs");
const path = require("path");

const baseDir = "../data";
const folderPath = path.join(baseDir, "ABC");
const firstFilePath = path.join(folderPath, "ex1.txt");
const secondFilePath = path.join(folderPath, "ex2.txt");

fs.mkdir(folderPath, { recursive: true }, (mkdirErr) => {
    if (mkdirErr) throw mkdirErr;
    console.log("Folder created:", folderPath);
    console.log("Parent directory:", path.dirname(folderPath));

    fs.writeFile(firstFilePath, "hellooooo", (writeErr) => {
        if (writeErr) throw writeErr;
        console.log("File created:", path.basename(firstFilePath));

        fs.readFile(firstFilePath, "utf8", (readErr, data) => {
            if (readErr) throw readErr;

            fs.writeFile(secondFilePath, data, (copyErr) => {
                if (copyErr) throw copyErr;
                console.log("Data copied to:", path.basename(secondFilePath));

                fs.unlink(firstFilePath, (unlinkErr) => {
                    if (unlinkErr) throw unlinkErr;
                    console.log("Original file deleted:", path.basename(firstFilePath));
                });
            });
        });
    });
});


