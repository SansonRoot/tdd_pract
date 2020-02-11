const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send({
        name:'hello'
    })
})

app.listen(3000,(err)=>{
    if (err){ console.log(err)}
    else{console.log('Server started on port 3000')}
})