const { log } = require('console')
const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.post('/', (res,req)=>{
    res.send('text was posted')
})

const port = 3000
app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})
