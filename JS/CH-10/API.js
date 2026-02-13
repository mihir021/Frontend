fetch("https://official-joke-api.appspot.com/random_joke")
.then(Response => Response.json())
.then(data => {
    console.log("url",data.message)
    console.log("status",data.status)
})
.catch(err => {
    console.log("error ",err)
})