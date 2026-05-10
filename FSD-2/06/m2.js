const express = require('express');
const app = express();
const port = 3000;
app.use(express.static(__dirname,{index:'m2.html'}));
const multer = require('multer');

var store = multer.diskStorage({
    destination: "multiple",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + ".docx");
    }
});

var upload = multer({ storage: store });

app.post('/uploadfile', upload.array('file', 5), (req, res) => {
    const file = req.files;
    if (file){
        for (let i = 0; i < file.length; i++){
            res.write("<h1>file name is " + file[i].originalname +
             "file destination is " + file[i].destination + " </h1>");
        }
        res.end();
    }    
}); 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
