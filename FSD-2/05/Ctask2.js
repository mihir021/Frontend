// Task: Store website feedback in a cookie named "feedback" for 10 seconds.
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3002;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Ctask2.html'));
});

app.post('/feedback', (req, res) => {
    const feedback = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        rating: req.body.rating,
    };

    // maxAge is in milliseconds, so 10000 means 10 seconds.
    res.cookie('feedback', JSON.stringify(feedback), { maxAge: 10000 });

    res.send(`
        <h1>Thank you for your feedback!</h1>
        <p>Your feedback cookie will expire in 10 seconds.</p>
        <a href="/">Submit another response</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
