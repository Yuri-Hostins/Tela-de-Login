var nome = "Bruno";
var passoword = "1234";
var inputNome = document.querySelector("#inputNome");
var inputSenha = document.querySelector("#inputSenha");


function verificar() {
  if (inputNome.value == nome && inputSenha.value == passoword) {

    alert("Bem-vindo")
  }
  else { alert("acesso negado") }
}

var button = document.querySelector("button");
button.onclick = (verificar)