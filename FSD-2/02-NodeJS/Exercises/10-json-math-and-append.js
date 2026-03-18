/*
 * Exercise 10: JSON read, calculations, and append result
 *
 * Task:
 * 1) Write object { d: { a, b, c[] } } to data/s2.txt
 * 2) Read it back and calculate:
 *    - addition of a and b
 *    - positive subtraction of c[1] and b
 *    - multiplication of c array elements
 * 3) Append final result text in same file
 */

const fs = require("fs");

const obj = {
    d: {
        a: 10,
        b: 20,
        c: [30, 10],
    },
};

fs.writeFile("data/s2.txt", JSON.stringify(obj), (err) => {
    if (err) throw err;
    console.log("Write done");

    fs.readFile("data/s2.txt", "utf-8", (readErr, data) => {
        if (readErr) throw readErr;

        const parsedData = JSON.parse(data);
        const a = parsedData.d.a;
        const b = parsedData.d.b;
        const c = parsedData.d.c;

        const addition = a + b;
        const subtraction = Math.abs(c[1] - b);
        const multiplication = c[0] * c[1];

        const result = `Addition: ${addition}, Subtraction: ${subtraction}, Multiplication: ${multiplication}`;

        fs.appendFile("data/s2.txt", `\n${result}`, (appendErr) => {
            if (appendErr) throw appendErr;
            console.log("Append done");
        });
    });
});
