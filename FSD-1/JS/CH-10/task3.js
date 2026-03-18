// tack one text filed for text filed must containes only letters and atlist one letter or more are allowed 

function task3(){
    pat = /^[A-Za-z]+$/
    u = document.getElementById("i1").value


    if(pat.test(u)){
        alert("String Matched ")
    }else{
        alert("Not mathch")
    }
    
}
