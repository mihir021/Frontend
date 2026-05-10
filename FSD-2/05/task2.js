// Task: Use POST to check whether the username is "admin".
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname, { index: 'task2.html' }));
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const username = req.body.username;

    if (username === 'admin') {
        res.send('<h1 style="color:blue;">Welcome admin</h1><a href="/">Try again</a>');
    } else {
        res.send('<h1 style="color:red;">Please login with admin name</h1><a href="/">Try again</a>');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
