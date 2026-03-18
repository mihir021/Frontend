// user name and pass for pass filed length must me 6-12 charecter for user name filed it shode not start with 
// (_ , @ , anyNumber) and also chek Both must not me blenk

function task2(){
    pat = /^_|^@|^\d/
    u = document.getElementById("i1").value
    u2 = document.getElementById("i2").value

    if(pat.test(u)){
        alert("String Not Matched 1")
    }else if( !(u2.length>= 6 && u2.length <= 12) ){
        alert("String Not Matched 2")
    }else if(u == "" || u2 == ""){
        alert("String Not Matched 3")
    }
    else{
        alert("Done!!!")
    }
    
}
