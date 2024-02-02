const fs = require('fs')

console.log("inicio")
const txt = "hello, you ok?"

fs.writeFile("arquivo2.txt", txt, (err) =>{

    if(err) console.log(err);

    setTimeout(() => {
        console.log("Arquivo criado")
    }, 1000)

})

console.log("Fim")