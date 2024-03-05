const one = () => {
    //fazemos uma promessa
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("esperou este aqui!");
            resolve()
        }, 1000)
     })
}

//normalmente quando é async a gente espera alguma coisa, ent por isso botamos async na frente
async function two (){
 console.log('init');
 //await = esperar
 await one()
 console.log('finish');
}

two()