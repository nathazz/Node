const http = require('http')
const port = 3000
const fs = require('fs')

/* 
Para CSS: 'Content-Type': 'text/css'
Para JavaScript: 'Content-Type': 'application/javascript'
Para JSON: 'Content-Type': 'application/json'
Para imagens PNG: 'Content-Type': 'image/png'
E assim por diante. 
*/

const server = http.createServer((req,res) =>{
    
    fs.readFile('msg.html', (err,data)=>{
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(data)

        return res.end()
    })
 
})

server.listen(port, () =>{
    console.log(`Servidor rodando na porta:http://localhost:${port}`)
})

