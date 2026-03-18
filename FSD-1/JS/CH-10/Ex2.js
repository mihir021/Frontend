function m1(){
    obj = document.f1.t1.value
    localStorage.setItem("userName",obj)
    sessionStorage.setItem("userName",obj)
}
function m2(){
    let a1 = (localStorage.getItem("userName")+'<br>')
    let a2 = (sessionStorage.getItem("userName")+'<br>')
    document.getElementById("o").innerHTML="local :"+a1+"<br>session :"+a2
}
function m3(){
    localStorage.clear()
    sessionStorage.clear()
}