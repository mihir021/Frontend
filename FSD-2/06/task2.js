// to configer the multer midel ware perform following task creat a html file named file.html
// this file conatins hading in h3 tag uplode your cv in red coulor and a form 
// with input type filed 
// craete  js file named file.js and link js and html file to browser 
// after uploding a file display msg on /uplode page and msg will be file has been uploded
// 4. save uploded file to specific directrory named uploded 

// do 
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '127.0.0.1';

const uploadDir = path.join(__dirname, 'uploded');
fs.mkdirSync(uploadDir, { recursive: true });

app.use(express.static(__dirname, { index: 'task2.html' }));

const storage = multer.diskStorage({
    destination: uploadDir,
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_File' + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});

app.post('/uploadfile', upload.single('lju'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    res.redirect('/uplode');
});

app.get(['/uplode', '/upload'], (req, res) => {
    res.send('file has been uploded');
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
