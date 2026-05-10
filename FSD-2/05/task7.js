// Task: Use middleware to allow only the "admin" username through /check.
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware validates the username before the final route handler runs.
function checkAdmin(req, res, next) {
    const username = (req.body.username || '').trim();

    if (username.toLowerCase() === 'admin') {
        res.locals.username = username;
        return next();
    }

    return res.status(401).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login Warning</title>
        </head>
        <body>
            <h1 style="color: red;">Warning: please login with admin username</h1>
            <a href="/">Try again</a>
        </body>
        </html>
    `);
}

app.post('/check', checkAdmin, (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome</title>
        </head>
        <body>
            <h1 style="color: green;">Welcome Admin</h1>
            <p>Hello, ${res.locals.username}.</p>
            <a href="/">Back to login</a>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
