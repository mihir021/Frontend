// develop a web application using express and ejs.
// to accept marks of 4 test(t1,t2,t3,t4) each out of 25 through a form
// using post method. after submission display all entered marks in table format
// along with total marks and determine the result if total>=35 then pass otherwise fail.

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit', (req, res) => {
    const { t1, t2, t3, t4 } = req.body;
    const total = parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4);
    const result = total >= 35 ? 'Pass' : 'Fail';
    res.render('result', { t1, t2, t3, t4, total, result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 