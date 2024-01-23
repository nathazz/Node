const pessoas = {
    "nome": "Nathan Silva",
    "idade": 17,
    "DataNsc": "18/03/2006",
}

console.table(pessoas)

//limpar o console
//depois de 2 segundos ela apaga o console

setTimeout(() => {
    console.clear(pessoas)
    console.log("acabou o tempo!!")
},2000)


// (!list.includes(r))
// const list = ["sim", "yes", "s", "y"]