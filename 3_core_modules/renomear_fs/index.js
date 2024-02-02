const fs = require('fs')

const txt = "Opa, me de um novo nome"
const novo = "novo.txt"
const velho ="velho.txt"

//cria
setTimeout(()=>{

    fs.writeFile(velho, txt, (err) =>{
        if(err) console.log(err)
    })

},100)

//renomea
setTimeout(()=>{
   fs.rename(velho, novo, (err)=>{
        if(err) console.log(err)
    
        console.log(`O arquivo ${velho} foi renomeado para ${novo}!`)
    })
},2000)

//apaga
setTimeout(()=>{
    fs.unlink(novo, (err)=>{
        if(err) console.log(err)

        console.log("Arquivo foi excluido com sucesso")
    })
},4000)