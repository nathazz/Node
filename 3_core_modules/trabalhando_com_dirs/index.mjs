import fs from 'fs';

const pasta = 'minhpasta'

if (!fs.existsSync(`./${pasta}`)){
    console.log('Não existe essa pasta');
}


console.log('criando...')


setTimeout(()=>{

    fs.mkdirSync(pasta)
    if(fs.existsSync(`./${pasta}`)){
        console.log('Pasta criada com sucesso!');
}
}, 2000)

setTimeout(()=>{
    fs.rm(pasta, { recursive: true}, (err) => {
        if(err) console.log(err)
        console.log('Excluido com sucesso!');
    })
},4000)


