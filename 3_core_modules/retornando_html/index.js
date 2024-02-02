
const http = require("http")

const port = 3000

const server = http.createServer((req,res) =>{

   res.statusCode = 200
   res.setHeader('Content-Type' , 'text/html',  'charset=utf-8')
   res.end('<h1>Olá, uma boa noite!</h1>')

})

server.listen(port, () =>{
    console.log(`Servidor rodando na porta:http://localhost:${port}`)
})