/*
 * Exercise 9: Store shape data with perimeter values
 *
 * We create a JSON object containing:
 * - circle (using diameter)
 * - square (using side)
 * Then we calculate perimeter of both and write everything to data/shape.txt.
 */

const fs = require("fs");

const shapes = [
    {
        name: "circle",
        diameter: 10,
    },
    {
        name: "square",
        side: 5,
    },
];

const circlePerimeter = Math.PI * shapes[0].diameter;
const squarePerimeter = 4 * shapes[1].side;

const result = {
    shapes,
    circlePerimeter,
    squarePerimeter,
};

fs.writeFile("data/shape.txt", JSON.stringify(result), (err) => {
    if (err) throw err;
    console.log("shape.txt updated successfully");
});