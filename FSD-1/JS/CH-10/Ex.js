function getn1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },1000)
    })
}

async function p1() {
    for(let i = 1; i <= 3; i++){
        await getn1();
        document.writeln(i*2 + '<br>');
    }
}

p1()
