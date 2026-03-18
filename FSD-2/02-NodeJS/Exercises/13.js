// write node js script to handle events as ask below
// 1. chek the radies is -ve or not if -ve then display the message "radius must be +ve" 
// else calculate the perimeter of circle
// 2. chek the side is -ve or not if -ve then display the message "side must be +ve"
// else calculate the perimeter of square


const e1 = require('events');
const ee = new e1()

ee.on('circle',(r)=>{
    if(r<0){
        console.log('radius must be +ve');
    }else{
        console.log('perimeter of circle is '+(3.14*2*r));
    }
})

ee.on('square',(s)=>{
    if(s<0){
        console.log('side must be +ve');
    }else{
        console.log('perimeter of square is '+(4*s));
    }
})

ee.emit('circle',-5);
ee.emit('square',-10);
