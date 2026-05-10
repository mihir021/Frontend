const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

// Reads form data from the query string, for example:
// /process?firstName=Mihir&lastName=Patel
app.get('/process', (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    res.send(`Hello ${firstName} ${lastName}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
