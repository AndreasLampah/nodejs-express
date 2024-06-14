const express   = require('express')
const app       = express()
const port      = 3000


app.get('/', (req,res)=>{
    res.send('<h2>Hello World</h2><hr>')
})


app.get('/profil', (req,res)=>{
    res.send('<h1>Profil saya</h1>')
})


app.listen(port, ()=>{
    console.log(`App sudah siap, buka http://localhost:${port}`)
})