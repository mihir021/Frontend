// using the events module 
// 1. when a connection event occurs, print a message to the console and trrigger data resive event
// 2. when data resive event occurs, print the data resived
// 3. finallt print thx at the end of execution


 const e1 = require('events');
 const ee = new e1()


ee.on('resive',()=>{
    console.log('resive done');
})
ee.on('connection',()=>{
    console.log('connection done');
    ee.emit('resive');
})
ee.emit('connection');
console.log("thx")
