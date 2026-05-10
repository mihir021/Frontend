const express = require('express');
const app = express();
const port = 3000;
app.use(express.static(__dirname,{index:'m1.html'}));
const multer = require('multer');

var store = multer.diskStorage({
    destination: "lju",
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: store });

app.post('/uploadfile', upload.single('file'), (req, res) => {
    if (req.file){
        res.send("<h1>file name is " + req.file.originalname +
             "file destination is " + req.file.destination + " </h1>");
    }
}); 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
