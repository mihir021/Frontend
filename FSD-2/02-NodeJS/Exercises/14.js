// create a node js program using the events module 
// 1. resister mltiple event listeners for a different events for ex myevent1, myevent2
// 2. removing a specific event listener (removeListener) for myevent2
// 3. removing all event listeners aosiaterd with (removeAllListeners) for myevent1
// 4. trriger the events and check the output which listener is called 

const e1 = require('events');
const ee = new e1()

var l1 = function fun(){
    console.log("listener 1 called ");
}
var l2 = function fun1(){
    console.log("listener 2 called ");
}

ee.on('myevent1',l1)
ee.on('myevent1',l2)

ee.on('myevent2',l1)
ee.on('myevent2',l2)

ee.removeListener('myevent2',l1);
ee.removeAllListeners('myevent1');

ee.emit('myevent1');
ee.emit('myevent2');