/*
 * Exercise 14: Add and remove event listeners
 *
 * Task:
 * 1) Register multiple listeners for myevent1 and myevent2
 * 2) Remove one specific listener from myevent2
 * 3) Remove all listeners from myevent1
 * 4) Emit both events and observe output
 */

const EventEmitter = require("events");
const emitter = new EventEmitter();

const listener1 = () => {
    console.log("Listener 1 called");
};

const listener2 = () => {
    console.log("Listener 2 called");
};

emitter.on("myevent1", listener1);
emitter.on("myevent1", listener2);

emitter.on("myevent2", listener1);
emitter.on("myevent2", listener2);

emitter.removeListener("myevent2", listener1);
emitter.removeAllListeners("myevent1");

// myevent1 prints nothing (all removed)
// myevent2 prints only listener2
emitter.emit("myevent1");
emitter.emit("myevent2");