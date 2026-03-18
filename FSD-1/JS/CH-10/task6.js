// product price and discount and save button when user click save then store enterd values into local storage 
// after saving data display msg in alrt box data save in local storage 
// add another button remove discont that removes only discout fileds from the local storage
// after removal print remaing data in consol

function save(){
    obj1 = document.f1.t1.value
    obj2 = document.f1.t2.value
    obj3 = document.f1.t3.value
    localStorage.setItem("product",obj1)
    localStorage.setItem("price",obj2)
    localStorage.setItem("discount",obj3)
    alert("data stored in local :) ")
}
function remove(){
    localStorage.removeItem("discount")
    let a1 = (localStorage.getItem("product"))
    let a2 = (localStorage.getItem("price"))
    document.writeln("product "+a1+"<br> price :"+a2+'<br>')
}