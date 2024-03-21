async function getUser (id) {
    //Estamos enviando uma promessa
    try {
        const data = await fetch(`https://reqres.in/api/users?id=${id}`);
        return await data.json();
    } catch (err) {
        return console.log(err);
    }
}


async function userName (id) {
    try{
        //Basicamente esperamos a função getUser fazer a promessa para mandar algo.
        const user = await getUser(id)
        console.log(`o nome do usuário é:${user.data.first_name}`);
        console.log(`o sobrenome do usuário é:${user.data.last_name}`);
    }catch (err){
        console.log(err);
    }
}


userName(4)