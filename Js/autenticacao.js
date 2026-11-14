export function lerUsuarios() {
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));
  if (usuarios == null) {
    usuarios = [];
  }
  return usuarios;
}

export function login({ email, senha }) {
  const usuarios = lerUsuarios();
  let usuario = {};
  const existe = usuarios.find((x) => {
    if (x.email === email && x.senha === senha) {
      usuario = x;
      return x.email === email && x.senha === senha;
    }
    return x.email === email && x.senha === senha;
  });
  if (!existe) {
    return { ok: false, erro: "Usuário ou Senha Incorretos" };
  }
  console.log(email, senha);
  localStorage.setItem("sessao", JSON.stringify(usuario));
  localStorage.setItem("logado", "true")
  return { ok: true};
}

export function sessaoAtual(){
    return JSON.parse(localStorage.getItem("sessao"))
}

export function estaLogado() {
  return localStorage.getItem("logado") === "true";
}

export function atualizarTela() {
  document.querySelectorAll("[data-auth]").forEach(el => {
    el.hidden = (el.dataset.auth === "logado") !== estaLogado();
  });
}

export function sair(){
  window.localStorage.removeItem("sessao");
  window.location.href = "../Paginas/login.html"
}