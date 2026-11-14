import { sessaoAtual, sair, atualizarTela } from "./autenticacao.js";
atualizarTela();

const userName = document.querySelector(".userName");
const btn_sair = document.getElementById("sair");
const sessao = sessaoAtual();

if (sessao) {
  userName.innerText = "Olá " + sessao.nome + "!";
} else {
  userName.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = window.location.pathname.includes("/Paginas/")
      ? "./login.html"
      : "./Paginas/login.html";
  });
}

btn_sair.addEventListener("click", sair);
