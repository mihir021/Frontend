/*
 * Topic: Managing listeners in EventEmitter
 *
 * This example shows how to:
 * 1) Add multiple listeners
 * 2) Count listeners
 * 3) Remove one listener
 * 4) Remove all listeners for an event
 */

const EventEmitter = require("events");
const emitter = new EventEmitter();

const listener1 = () => {
    console.log("Listener 1 called");
};

const listener2 = () => {
    console.log("Listener 2 called");
};

emitter.on("start", listener1);
emitter.on("start", listener2);

let count = emitter.listenerCount("start");
console.log(count); // 2

emitter.removeListener("start", listener1);
count = emitter.listenerCount("start");
console.log(count); // 1

emitter.removeAllListeners("start");
count = emitter.listenerCount("start");
console.log(count); // 0

// No output now because all listeners are removed.
emitter.emit("start");