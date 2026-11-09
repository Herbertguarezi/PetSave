const email = document.querySelector(".email");
const senha = document.querySelector(".senha");
const btn_entrar = document.querySelector(".btn-entrar") 


function login(event){
    event.preventDefault()
    console.log(email.value)
    if(email.value == "" || senha.value == ""){
        window.alert("Preencha os valores")
    }else{
        if (email.value == "admin@petsave.com" && senha.value == "Admin_"){
            window.location.href = "../index.html";
        }else{
            window.alert("Senha Incorreta")
        }
    }
}

btn_entrar.addEventListener("click", login)