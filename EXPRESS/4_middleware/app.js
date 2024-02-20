const express = require('express')
const app = express()
const PORT = 3000

//São códigos que podem ser executado no meio/entre (middle) de alguma ação e outra
//Por exemplo: verificar seo usuário esrá logado, podemos ter um para esta verificação

const path = require('path')
const basePath = path.join(__dirname, "templates")

const checkAuth = (req, res, next) => {

    req.authStatus = false

   if (req.authStatus){
    console.log('Está logado, pode continuar');
    next()
   }

   console.log('Não está logado, faça o login para continuar');
   next()
}

app.use(checkAuth)

app.get('/', (req,res) => {

    res.status(200).sendFile(`${basePath}/index.html`)

})


app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})