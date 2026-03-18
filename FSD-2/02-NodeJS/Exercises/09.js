// Creat JSON object which contains array of objects clculat parimater of squre and 
// parimiter of circle by using side value and diameter value respectively and write object
// as well as perimiter value of squre and circle in sape.txt file 

const fs = require('fs')

const shape = [
    {
        name: 'circle',
        diameter: 10,
    },
    {
        name: 'square',
        side: 5,
    }
]

const cp = Math.PI * shape[0].diameter
const sp = 4 * shape[1].side

const result = {
    shape,
    cp,
    sp
}

fs.writeFile('data/shape.txt', JSON.stringify(result), (err) => {
    if (err) throw err;
    console.log('Done');
})