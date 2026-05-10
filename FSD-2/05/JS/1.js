const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const cssPath = path.join(__dirname, '../CSS');
const imgPath = path.join(__dirname, '../IMG');
const htmlPath = path.join(__dirname, '../HTML');

// Serves separate HTML, CSS, and image folders as one static site.
app.use(express.static(cssPath));
app.use(express.static(imgPath));
app.use(express.static(htmlPath, { index: '1.html' }));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
