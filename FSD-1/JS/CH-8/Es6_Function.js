const add = (a,b) => a+b
const s1 = (x) => x*x
const h1 = () => "hello!"
const m1 = (a,b) => {
    const r1 = a*b
    return r1
}
const newFun = p => (`val=${p}`)


document.writeln(add(1,1)+'<br>')
document.writeln(s1(1)+'<br>')
document.writeln(h1()+'<br>')
document.writeln(m1(1,1)+'<br>')
document.writeln(newFun(7)+'<br>')
