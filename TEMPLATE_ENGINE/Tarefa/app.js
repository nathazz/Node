const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const imgUpload = require('express-fileupload')


app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(imgUpload())

//mexer com form

app.use(express.json())

app.use(express.urlencoded({extended:false }))

app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/itens',(req,res) =>{
    const produtos = {
        chair_one:"Slim black chair",
        chair_two:"Bar stool",
        vase:"Vase white"
    }

    res.render('itens', {produtos} )
})


app.get('/form', (req, res) =>{
    res.status(200).render('form')

})

app.post('/cadastro', (req,res) =>{
    const body = req.body
    console.log(body);

    //enviar a imagem para minhas pasta
    req.files.imagem.mv(__dirname +  `/imgs/${ req.files.imagem.name}`)
    res.end()
})


const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})