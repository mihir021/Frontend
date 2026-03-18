const student = [
    {
        name:'abc',
        age: 30
    },
    {
        name:'xyz',
        age: 20
    }
]

var fs = require('fs')

fs.writeFileSync('../data/student.txt', JSON.stringify(student))

data = fs.readFileSync('../data/student.txt', 'utf-8')

console.log(JSON.parse(data))
