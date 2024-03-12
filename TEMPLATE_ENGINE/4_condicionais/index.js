const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')


app.get('/dashboard', (req,res) =>{
    res.render('dashboard')
})


app.get('/', (req, res) =>{
    const selecao = {
        name: "Inglaterra",
        capital:"Londres",
        c:"entre os anos de 1066 e 1362, a língua oficial da Inglaterra era o francês."
    }

    const auth = true

    res.render('home', {selecao, auth})
})


const PORT = 3000

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})