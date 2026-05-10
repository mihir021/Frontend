const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'd.html'));
});

app.post('/a', (req, res) => {
    const name = req.body?.name?.trim();

    if (!name) {
        return res.status(400).send('Please enter a valid name.');
    }

    res.send(`Hello ${name}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
