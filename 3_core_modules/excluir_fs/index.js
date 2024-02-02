const fs = require("fs")
const txt = "Me apague"

setTimeout(()=>{
    fs.writeFile("arquivo.txt", txt, (err) => {
        if(err) console.log(err)
    })
}, 100)

setTimeout(()=>{
    fs.unlink('arquivo.txt', (err)=>{

        if(err) console.log(err)
    
        console.log('Arquivo excluido com sucesso!')
    })
},3000)
