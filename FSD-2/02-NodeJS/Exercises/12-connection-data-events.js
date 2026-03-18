/*
 * Exercise 12: Event chaining with EventEmitter
 *
 * Task:
 * 1) When "connection" event occurs, print message and trigger "receive".
 * 2) When "receive" event occurs, print data received message.
 * 3) Print final thank-you line.
 */

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("receive", () => {
    console.log("Data received");
});

emitter.on("connection", () => {
    console.log("Connection successful");
    emitter.emit("receive");
});

emitter.emit("connection");
console.log("Thanks");
