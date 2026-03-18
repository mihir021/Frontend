 const e1 = require('events');

 const ee = new e1()

//  ee.on('start',()=>{
//      console.log('event is emitted ');
//  })
//  ee.emit('start');

// var l1 = function fun(){
//     console.log('hello world');
// }

// ee.on('start',l1)
// ee.emit('start');

ee.on('s1',(start,end)=>{
    console.log('event is emitted ');
    console.log(start,end);
})

ee.emit('s1','hello','world');

