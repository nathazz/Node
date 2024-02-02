const url = require('url')
const address = 'http://ww.meusite.com.br/catalog?produtos=cadeira'
const parsedUrl = new url.URL(address)


/*
Pode pra chamar assim
console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.hostname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))
OU
 */

console.log(parsedUrl)