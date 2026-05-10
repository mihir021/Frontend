const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 3000;

// Creates a session cookie and stores the page-view count for each browser.
app.use(
    session({
        secret: 'Mihir1',
        resave: false,
        saveUninitialized: true,
    })
);

// Refresh this page to see the session value increase.
app.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views += 1;
        return res.send(`Number of views: ${req.session.views}`);
    }

    req.session.views = 1;
    return res.send('Welcome to the session demo. Refresh the page!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
