let a = true
if(a){
    document.writeln("welocome ",a)
}

let s1 = 16
if (s1 >= 18){
    document.writeln("allowed ")
}else{
    document.writeln("not allowed")
}


let s2 = 16
if (s2 >= 90){
    document.writeln("A")
}else if(s2 >= 75){
    document.writeln("B")
}else{
    document.writeln("C")
}

document.writeln("<br><br><br>")

let r1 = "admin"
switch (r1){
    case "admin":
        document.writeln("full acces ")
        break;

    case "admin1":
        document.writeln("full acces not")
        break;

    case "admin2":
        document.writeln("full acces nnnn")
        break;

    default:
        document.writeln("not found")
}

document.writeln("<br><br><br>")

let age = 90
let r2 = age >= 18 ? "ad":"minor"
document.writeln(r2)

for (let i = 1 ; i <= 5  ; i++ ){
    document.writeln(i)
}
document.writeln("<br><br>")
let i = 1
while(i<=5){
    document.writeln(i)
    i++
}

do{
    document.writeln(i)
    i++
}while(i >= 9 )

// for of loop

let f1 = ["mango","orange"]
for (let f of f1){
    document.writeln(f)
}

let u1 = {
    fname : "a",
    age : 25
}
for (let key in u1){
    document.writeln(key +  " : " + u1[key])
}

let s4 = ["abc","pqr","xyz"]
for (let i in s4){
    document.writeln(i)
    document.writeln(s4[i])
}

