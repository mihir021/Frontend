function fun(){
    // pat = /abc/i
    pat = /[abc]/i  // koy ek latter ave to chle or or or
    u = document.getElementById("i1").value
    if(pat.test(u)){
        alert("String Matched")
    }else{
        alert("not Mathch")
    }
}
function funNot(){
    pat = /[^abc]/i  // not allowed 
    u = document.getElementById("i1").value
    if(pat.test(u)){
        alert("String Matched")
    }else{
        alert("not Mathch")
    }
}

// \d
function funDigit(){
    pat = /[0-9]/  // only digit 
    u = document.getElementById("i1").value
    if(pat.test(u)){
        alert("String Matched")
    }else{
        alert("not Digit !!")
    }
}

// \D
function funDigitNot(){
    pat = /[^0-9]/  //abc1 is allowed
    u = document.getElementById("i1").value
    if(pat.test(u)){
        alert("String Matched")
    }else{
        alert("not Digit !!")
    }
}

function funOr(){
    pat = /[x|y]/  //x or y
    u = document.getElementById("i1").value
    if(pat.test(u)){
        alert("String Matched")
    }else{
        alert("not Digit !!")
    }
}

function funStartwith(){
    pat = /^A/  //start with a
    u = document.getElementById("i1").value
    if(pat.test(u)){
        alert("String Matched")
    }else{
        alert("not start with A!!")
    }
}

function funEndwith(){
    pat = /$A/  // End with a
    u = document.getElementById("i1").value
    if(pat.test(u)){
        alert("String Matched")
    }else{
        alert("not start with A!!")
    }
}

function funZeroMore(){
    pat = /BO*/  // * na hoy to pan chale and maltipule hoy to pan chle 
    u = document.getElementById("i1").value
    if(pat.test(u)){
        alert("String Matched")
    }else{
        alert("not start with A!!")
    }
}

function funOneOrMore(){
    pat = /BO+/  //  Now atlist one O is requred 
    u = document.getElementById("i1").value
    if(pat.test(u)){
        alert("String Matched")
    }else{
        alert("not start with A!!")
    }
}

function MobileNumber(){
    pat = /^[0-9]{10}$/
    u = document.getElementById("i1").value
    if(pat.test(u)){
        alert("String Matched")
    }else{
        alert("not start with A!!")
    }
}

// \w --> [A-Z a-z 0-9]
// \W --> [^A-Z a-z 0-9]
