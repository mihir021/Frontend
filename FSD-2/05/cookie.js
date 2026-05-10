const express = require('express');
const cp = require('cookie-parser');

const app = express();
const PORT = 3001;

app.use(cp());

app.get('/cookie', (req, res) => {
    // Demonstrates different ways to set cookies.
    res.cookie('name', 'Express');
    res.cookie('fname', 'expressjs');
    res.cookie('lname', 'nodejs');
    res.cookie('ID', '2', { expires: new Date(Date.now() + 7000) });
    res.cookie('gmail', 'a@gmail.com', { maxAge: 2000 });
    res.send(req.cookies);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
