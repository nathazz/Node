const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

//imprimir funções diretas
function c1() {
    console.log('Ocorreu um evento')
}
function c2() {
    console.log('E mais outro')
}


eventEmitter.on('eventOne', c1)
eventEmitter.on('eventOne', c2)
eventEmitter.emit('eventOne')

//Cancelando o registro de eventos

eventEmitter.off('eventOne', c1)
eventEmitter.emit('eventOne')

//////////////////////////////////////////

//imprimir apenas uma vez

eventEmitter.once('eventOnce', () =>{
    console.log('eventOnce disparado uma vez')
})

eventEmitter.emit('eventOnce')

//////////////////////////////////////

//imprimir com template string

eventEmitter.on('status', (code, msg) => {
    console.log(`Obtive ${code} e ${msg}`)
})

eventEmitter.emit('status', 200, 'ok')


///////////////////////////////////

