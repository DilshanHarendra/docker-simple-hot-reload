const express = require('express')
const app = express()
require('dotenv').config()

app.get('/',(req,res)=>{
    res.status(200).send({
        message:`Hello world ${process.env.APP_NAME}`
    })
})

app.listen(8000,()=>console.log("http://localhost:8000"))
