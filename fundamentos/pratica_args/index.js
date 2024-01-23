// externo
const minimist = require('minimist')

//interno
const calculo = require('./calculo.js').calculo
const args = minimist(process.argv.slice(2))


const a = parseInt(args['a'])
const b = parseInt(args['b'])
const c = parseInt(args['c'])

calculo(a,b,c)
