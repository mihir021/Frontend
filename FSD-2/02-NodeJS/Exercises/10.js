// write nodejs script and JSON to perform belov task 
// 1. write belove obj in txt file named s2.txt 
//  {d:{a:10,b:20,c:[30,10]}}
// 2. read data from same file and perform belov task
    // a. addition of a and b 
    // b. subtraction of 2nd element of c and b must be positive value
    // c. multiplication of elemets of c
// 3. add the output of addition, subtraction and multiplication in s2.txt file in the end of file

const fs = require('fs')

const obj = {
    d: {
        a: 10,
        b: 20,
        c: [30, 10]
    }
}

fs.writeFile('data/s2.txt', JSON.stringify(obj), (err) => {
    if (err) throw err;
    console.log('write done')
    
    fs.readFile('data/s2.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        const parsedData = JSON.parse(data);
        a = parsedData.d.a
        b = parsedData.d.a
        c = parsedData.d.c

        const addition = a + b
        const subtraction = Math.abs(c[1] - b)
        const multiplication = c[0] * c[1]

        const result = `Addition: ${addition}, Subtraction: ${subtraction}, Multiplication: ${multiplication}`

        fs.appendFile('data/s2.txt', `\n${result}`, (err) => {
            if (err) throw err;
            console.log('append done')
        })
    })

})
