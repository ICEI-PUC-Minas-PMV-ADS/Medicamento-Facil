
let userLogado = JSON.parse(localStorage.getItem("userLogado"));
let cadastradoNome = document.querySelector("#cadastradoNome");
let cadastradoSobrenome = document.querySelector("#cadastradoSobrenome");
let cadastradoCelular = document.querySelector("#cadastradoCelular");
let cadastradoEmail = document.querySelector("#cadastradoEmail");
let cadastradoSenha = document.querySelector("#cadastradoSenha");
let cadastradoMed = document.querySelector("#cadastradoMed");
let notificado = JSON.parse(localStorage.getItem("notificado"));
let cadastradoNotificacao = document.querySelector("#cadastradoNotificacao");

cadastradoNome.innerHTML = userLogado.nome;
cadastradoSobrenome.innerHTML = userLogado.sobrenome;
cadastradoCelular.innerHTML = userLogado.celular;
cadastradoEmail.innerHTML = userLogado.email;
cadastradoSenha.innerHTML = userLogado.senha;
cadastradoMed.innerHTML = userLogado.medicamento;

if (notificado) {
    cadastradoNotificacao.innerHTML = notificado.nome;
}





