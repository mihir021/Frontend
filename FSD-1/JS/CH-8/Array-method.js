let f1 = ["orange","Mango"]
f1.push("apple")
document.writeln(f1+"<br>")

let c1 = [10,20,30]
let c2 = c1.pop()
document.writeln(c2+"<br>")
document.writeln(c1+"<br>")

//   map 

let n1 = [1,2,3,4]
let s1 = n1.map(n => n*n)
document.writeln(s1+'<br>')

// filter

let n2 = [1,2,3,4,5,6,7,8]
let n3 = n2.filter(n => n%2==0)
document.writeln(n3+'<br>')

// forEach

n2.forEach(element => {
    document.writeln(element+' ')
});
document.writeln('<br>')

// incules 

ans = n2.includes(71)
if (ans){
    document.writeln('have a number in array')
}else{
    document.writeln('array do not contains elements <br>')
}

// find 

const u1 = [{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"}]
let user = u1.find(u => u.id === 2)
document.writeln(user.name +'<br>')

