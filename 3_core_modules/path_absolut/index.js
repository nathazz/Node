const path = require('path')

//path absoluto
console.log(path.resolve('txt.txt'));

//formar path
const midFolder = 'linguagem'
const filename = 'node.js'

const finalPath = path.join('/', 'arquivos', midFolder, filename)

console.log(finalPath);