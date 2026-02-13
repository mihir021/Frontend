// create a small html form where tack 2 filed in local storge 
// 1st username = "lj"
// 2nd gmail = "lj@exp.com"
// retirve and display stored user name in the console and remove only gmail filed and print remiang filed in the consol 

localStorage.setItem("userName","lj")
localStorage.setItem("gmail","lj@exp.com")
document.writeln(localStorage.getItem("userName")+"<br>")
document.writeln(localStorage.getItem("gmail")+"<br>")
localStorage.removeItem("gmail")
document.writeln(localStorage.getItem("userName")+"<br>")
