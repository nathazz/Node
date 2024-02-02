const fs = require('fs')

fs.readFile('c:/Users/natha/OneDrive/Documentos/teste.txt', 'utf8', (err,data) =>{

    if(err){ console.log(err) }
    

    console.log(data)

})