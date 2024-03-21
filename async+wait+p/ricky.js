// https://rickandmortyapi.com/api/character/158


async function getApi (id){
    return fetch(`https://rickandmortyapi.com/api/character/${id}`).then((data) =>
    data.json()
    ).catch((error) => console.log(error))
}


async function getCharacter (id){

    try{
        const user = await getApi(id)
        console.log(user)
    }catch (err){
        console.log(err);
    }

}

getCharacter(1)