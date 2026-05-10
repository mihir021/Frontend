const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const staticPath = path.join(__dirname, '../frontend');

// Serves the files from the frontend folder.
app.use(express.static(staticPath));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
