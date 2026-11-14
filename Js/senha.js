import { login, lerUsuarios, estaLogado } from "./autenticacao.js";

const btn_entrar = document.querySelector(".btn-entrar");
const email = document.querySelector(".email");
const senha = document.querySelector(".senha");
const erro = document.getElementById("erro");

btn_entrar.addEventListener("click", (event) => {
  event.preventDefault();
  const emailNormalizado = email.value.trim().toLowerCase();
  if (login({ email: emailNormalizado, senha: senha.value }).ok) {
    erro.style.display = "none";
    window.location.href = "../index.html";
    estaLogado()
  } else {
    erro.style.display = "block";
  }
});
