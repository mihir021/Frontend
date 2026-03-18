/*
 * Exercise 13: Validate input and calculate perimeter using events
 *
 * Task:
 * 1) For circle event, check radius is positive before calculating perimeter.
 * 2) For square event, check side is positive before calculating perimeter.
 */

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("circle", (radius) => {
    if (radius < 0) {
        console.log("Radius must be positive");
    } else {
        console.log("Perimeter of circle is " + 2 * Math.PI * radius);
    }
});

emitter.on("square", (side) => {
    if (side < 0) {
        console.log("Side must be positive");
    } else {
        console.log("Perimeter of square is " + 4 * side);
    }
});

// Try with negative values to test validation.
emitter.emit("circle", -5);
emitter.emit("square", -10);
