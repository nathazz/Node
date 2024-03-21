const handlebars = require('express-handlebars')
const express = require('express')

const app = require("./server.js")



app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))



app.get('/', (req, res) =>{
    const produtos = {
        chair_one:"Slim black chair",
        chair_two:"Bar stool",
        vase:"Vase white"
    }

    res.render('home', {produtos})
})



const PORT = 3000


app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})