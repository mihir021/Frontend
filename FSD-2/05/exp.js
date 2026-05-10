const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'exp.html'));
});

// Checks whether the user selected the subscription checkbox.
function checkSubscription(req, res, next) {
    req.isSubscribed = req.body.subscribe === 'subscribe';
    next();
}

// Keeps form values available to the final route handler.
function fetchName(req, res, next) {
    const { name, email } = req.body;

    req.name = name || 'Guest';
    req.email = email || 'No email provided';
    next();
}

app.post('/exp', fetchName, checkSubscription, (req, res) => {
    if (req.isSubscribed) {
        return res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome</title>
            </head>
            <body>
                <h1>Welcome ${req.name}</h1>
                <p>Your email: ${req.email}</p>
                <p>Thank you for subscribing.</p>
                <a href="/">Logout</a>
            </body>
            </html>
        `);
    }

    return res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Subscribe</title>
        </head>
        <body>  
            <h1>Welcome ${req.name}</h1>
            <p>Your email: ${req.email}</p>
            <p>You can subscribe at any time.</p>
            <a href="/subscribe">Subscribe</a>
        </body>
        </html>
    `);
});

app.get('/subscribe', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Subscribe</title>
        </head>
        <body>  
            <p>Thank you for subscribing.</p>
            <a href="/">Back</a>
        </body>
        </html>
    `);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
