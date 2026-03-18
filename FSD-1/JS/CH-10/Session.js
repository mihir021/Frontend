// save session storge 
sessionStorage.setItem("cart","3 items")

// display
let s1 = sessionStorage.getItem("cart")
document.writeln(s1+'<br>')
sessionStorage.removeItem("cart")

// sessionStorage.clear()