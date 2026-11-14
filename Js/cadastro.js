import { lerUsuarios } from "./autenticacao.js";

const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const btn_entrar = document.getElementById("btn_entrar");
const erro = document.getElementById("erro");
const sucesso = document.getElementById("sucesso")

function cadastrar({ nome, nascimento, email, senha }) {
  const usuarios = lerUsuarios();
  const emailNormalizado = email.trim().toLowerCase();
  const existe = usuarios.some(
    (elemento) => elemento.email === emailNormalizado,
  );
  // caso o email já existe ele retorna um objeto com o erro
  if (existe) {
    return { ok: false, erro: "e-mail já cadastrado" };
  }
  usuarios.push({ nome, nascimento, email: emailNormalizado, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  return { ok: true };
}

btn_entrar.addEventListener("click", (event) => {
  event.preventDefault();
  const retorno = cadastrar({
    nome: nome.value,
    nascimento: nascimento.value,
    email: email.value,
    senha: senha.value,
  });
  if (!retorno.ok) {
    erro.style.display = "block";
  } else {
    erro.style.display = "none";
    sucesso.style.display = "block";
    setTimeout(() => window.location.href = "./login.html", 2000)
  }
});
