// write express js script with size limit of 10mb to a specific directrory named data 
// on the server and in this folder file must be stored in formet of LJU_File.pdf 
// where lju is a filed name 

const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static(__dirname, { index: 'm3.html' }));   

var storage = multer.diskStorage({
    destination: "Data",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_File" + path.extname(file.originalname));
    }
});

var upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }
})

app.post('/uploadfile', upload.single('lju'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send('File uploaded successfully.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    