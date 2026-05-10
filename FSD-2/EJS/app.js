const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('contect');
});

app.post('/upload', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Name: ${name}, Email: ${email}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});