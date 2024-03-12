const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) =>{
    res.render('home', {layout: false})
})

app.get('/text', (req, res) =>{
    res.render('text', {layout:false})
})

const PORT = 3000


app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})