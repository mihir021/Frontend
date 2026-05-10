const express = require('express');
const router = express.Router();
const data = [
    {id: 101,name: "abc",branch: "CE"},
    {id: 102,name: "def",branch: "IT"},
    {id: 103,name: "ghi",branch: "IT"},
    {id: 104,name: "jkl",branch: "EE"}
];

router.get('/',(req,res)=>{
    res.set("Content-Type","text/html");
    for (i of data){
        res.write('<h3> ID: '+JSON.stringify(i.id)+' Name: '+i.name+' Branch: '+JSON.stringify(i.branch)+'</h3>');
    }
    res.send();
});

router.get('/:id',(req,res)=>{
    var c1 = data.filter((item) => item.branch == req.params.id);
    if(c1.length > 0){
        res.send(c1);
    }
    else{
        res.send("Data not found");
    }
});

module.exports = router;