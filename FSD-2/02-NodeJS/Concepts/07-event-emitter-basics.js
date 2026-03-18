/*
 * Topic: EventEmitter basics
 *
 * Steps:
 * 1) Create an EventEmitter object.
 * 2) Register a listener for event "s1".
 * 3) Emit event "s1" with two values.
 */

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("s1", (start, end) => {
    console.log("Event s1 emitted");
    console.log(start, end);
});

emitter.emit("s1", "hello", "world");

