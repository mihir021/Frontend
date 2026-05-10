// Task: Split a submitted message by "." and print each part on a new line.
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname, { index: 'task6.html' }));
app.use(express.urlencoded({ extended: true }));

app.get('/submit', (req, res) => {
    const message = req.query.message || '';
    const splitMessage = message.split('.').join('<br>');

    res.send(`<h1>${splitMessage}</h1><a href="/">Try again</a>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
