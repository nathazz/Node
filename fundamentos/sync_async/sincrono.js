const fs = require ('fs')

//Basicamente o sincrono ele faz a requisição imediatamente
const txt = "Help meeee"
console.log('incio')

fs.writeFileSync('arquivo.txt', txt)

console.log('Fim')
