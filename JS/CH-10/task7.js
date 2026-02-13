// give a list of 5 
// select allp tags chage txt of p madifiled and updated 
// print the count of updated elemnte on consol

function fun(){
    let a1 = document.getElementsByTagName("p")
    let a = 0;
    for (let i = 0 ; i < a1.length ; i++){
        a1[i].innerHTML = "change"
        a = i;
    }
    console.log(a+'<br>')
}