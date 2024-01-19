const fs = require('fs')

const document = "It´s a big problem Mister "

fs.writeFile("c:/Users/natha/OneDrive/Documentos/teste.txt", document,  (err) =>{
    if(err) console.log(err);
    console.log("Arquivo criado com sucesso!")
})

