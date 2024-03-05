function getUser (id) {
    //Estamos enviando uma promessa
    return fetch(`https://reqres.in/api/users?id=${id}`).then((data) => 
    data.json()
    ).catch((err) => console.log(err))

}

async function userName (id) {
    try{
        //Basicamente esperamos a função getUser fazer a promessa para mandar algo.
        const user = await getUser(id)
        console.log(`o nome do usuário é:${user.data.first_name}`);
        console.log(`o sobrone do usuário é:${user.data.last_name}`);
      
    }catch (err){
        console.log(err);
    }
}


userName(4)