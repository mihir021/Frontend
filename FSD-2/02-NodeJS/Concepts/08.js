const e1 = require('events');
const ee = new e1()

var l1 = function fun(){
    console.log("listener 1 called ");
}
var l2 = function fun1(){
    console.log("listener 2 called ");
}

ee.on('start',l1)
ee.on('start',l2)

let count = ee.listenerCount('start');
console.log(count); // 2

ee.removeListener('start',l1);
count = ee.listenerCount('start');
console.log(count); // 1

ee.removeAllListeners('start');
count = ee.listenerCount('start');
console.log(count); // 0

ee.emit('start');