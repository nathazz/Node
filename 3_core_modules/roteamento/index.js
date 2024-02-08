const http = require('http')
const port = 3000
const fs = require('fs')
const url = require('url')


/* 
Para CSS: 'Content-Type': 'text/css'
Para JavaScript: 'Content-Type': 'application/javascript'
Para JSON: 'Content-Type': 'application/json'
Para imagens PNG: 'Content-Type': 'image/png'
E assim por diante. 
*/

const server = http.createServer((req,res) =>{

    const q = url.parse(req.url, true) 

    /*     
     Geralmente, o q.pathname começa com uma barra ("/"), 
     pois é a convenção para indicar o caminho de um recurso na web (por exemplo, 
     "/pasta/arquivo.html"). Portanto, ao usar substring(1), estamos removendo essa 
      barra inicial. 
      */

    const filename = q.pathname.substring(1) //index.html

    if(filename.includes('html')){   

        if(fs.existsSync(filename)){
            fs.readFile(filename, (err,data)=>{
         
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write(data)
                return res.end()

            })
        } else{
            fs.readFile('404.html', (err, data) => {
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write(data)
            })
        }
    }
})

server.listen(port, () =>{
    console.log(`Servidor rodando na porta:http://localhost:${port}/index.html`)
})

