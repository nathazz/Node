const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
   
    this.classList.toggle("bi-eye");
});


function limitCharacter(){
    const limit = 12;

    const password = document.querySelector("#password")

    let key = password.value


    if(key.length > limit){
        password.value = key.slice(0, limit)
        Toastify({
            text: "Por favor, apenas 12 caracteres",
            position: 'right',
            className: "info",
            duration: 3000,
            style: {
                color: "white",
                "font-family": "sans-serif",
                "border-radius": "10px",
                background: "#FECE2F"
            }
        }).showToast();
    }



}

