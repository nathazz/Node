function saveLocalStorage(){

    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const email = document.querySelector('#email').value;
 
     localStorage.setItem("name", name)
     localStorage.setItem("age", age)
     localStorage.setItem("email", email)
     

}

function showStorage() {
    alert(`Name:${localStorage.getItem("name")}\nAge:${localStorage.getItem("age")}\nEmail:${localStorage.getItem("email")}`
    );
 }
