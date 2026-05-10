// <!-- write a script using express js 
// 1 creat session.html file which containes user name pass and loging btn 
// 2 after clicking loging btn its shode jump on save page 
// 3 store uname and pass in session after saving session redirect to fatch page and read the values 
// 4 on this page cheak authatication of user 
// 5 user name and pass must be admin and admin@123 respectively 
// 6 if this is true then display msg welcome admin and logout link by click on logout link user shode jump to distroy page 
//  and distroy the session and diplay msg session is distoyed
// 7 also give a link of loging of under that msg by clicking that loging link user will be redirect to the home page 
// 8 else diplay msg in red colour plz enter valid user name and pass and loging link to redre to the home page 
//  -->

const epress = require("express")
const app = epress()
const session = require("express-session")

app.use(session({secret:"mihir"}))

app.use(epress.static(__dirname,{index:'task7.html'}))

app.get('/save',(req,res)=>{
    req.session.uname = req.query.uname
    req.session.pass = req.query.pass
    res.redirect('fetchsession')
})

app.get("/fetchsession",(req,res)=>{
    if (req.session.uname=="admin" && req.session.pass=="admin@123") {

        res.type("text/html")
        res.write("<h1>welcome admin </h1>")
        res.write("<a href='/delS'> logout </a>")
    }else{
        res.type("text/html")
        res.write("<h1 style='color:red'> plz enter valid user name and pass </h1>")
        res.write("<a href='/'> login </a>")
    }
})

// make dels
app.get("/delS",(req,res)=>{
    req.session.destroy()
    res.type("text/html")
    res.write("<h1> session is distoyed </h1>")
    res.write("<a href='/'> login </a>")
    res.send()
})


app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})