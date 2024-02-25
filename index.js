const express = require('express')

console.log(typeof express);

const app = express()

app.get("/",(req, res)=>{
    res.send("Hello Students")
})

/* 
* Starting the express a sever
*/
app.listen(8002,()=>{
    console.log("Sever got started");
})