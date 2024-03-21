function save(){

    const name = urlParams.get("name")
    const password = urlParams.get("key")
    const email = urlParams.get("email")

    localStorage.setItem("name", name)
    localStorage.setItem("key", password)
    localStorage.setItem("email", email)

}

function showStorage() {

    alert(`Name:${localStorage.getItem("name")}\nEmail:${localStorage.getItem("email")}\nPassword:${localStorage.getItem("key")}`
    );

}

function loadData(){

    // Recuperar dados do localStorage
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

 
    if (name && email) {
        document.getElementById('nome').innerText = `@${name}`;
        document.getElementById('email').innerText = `${email}`;
    } else{
        alert("Por favor, preencha o formulário antes de carregar os dados.");
    }
    
    
}

function deleteData() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("key")
    
    const list = [name, email, password]
    localStorage.clear(list)

}

