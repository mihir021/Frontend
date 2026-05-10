// Task: Save submitted form values in cookies, then clear the last-name cookie
// on the admin page and display the remaining cookie values.
const express = require('express');
const path = require('path');
const cp = require('cookie-parser');

const app = express();
const PORT = 3001;

app.use(cp());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Ctask.html'));
});

app.post('/next', (req, res) => {
    const { fname, lname, password } = req.body;
    res.cookie('fname', fname);
    res.cookie('lname', lname);
    res.cookie('password', password);
    res.redirect('/admin');
});

app.get('/admin', (req, res) => {
    res.clearCookie('lname');

    const fname = req.cookies.fname || 'Not set';
    const password = req.cookies.password || 'Not set';

    res.send(`
        <h1>Admin Page</h1>
        <p>First Name: ${fname}</p>
        <p>Password: ${password}</p>
        <p>Last-name cookie cleared.</p>
        <a href="/">Back to form</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
