// excepting an integer having 4 digits input shode not except ch of letters and special symboles 

function task4(){
    pat = /^[0-9]{4}$/
    u = document.getElementById("i1").value

    if(pat.test(u)){
        alert("String Matched ")
    }else{
        alert("Not mathch")
    }  
}