// Task: Build a GET-based calculator with validation.
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname, { index: 'task1.html' }));

app.get('/calculate', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operation = req.query.operation;

    if (num1 <= 0 || num2 <= 0) {
        return res.send('Please enter valid numbers greater than 0');
    }

    if (!operation) {
        return res.send('Please select an operation');
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            return res.send('Invalid operation selected');
    }

    res.send(`The result of ${operation} is: ${result}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
