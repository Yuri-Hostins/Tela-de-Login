var nome = "Bruno";
var senha = "1234";
var inputNome = document.querySelector("#inputNome");
var inputSenha = document.querySelector("#inputSenha");
var tentativaAtual = 1;
var maximoTentativas = 3;

function verificar() {
  if (inputNome.value === nome && inputSenha.value === senha) {
    alert("Bem-vindo, " + nome);
  } else {
    if (tentativaAtual === maximoTentativas) {
      alert("Número permitido de tentativas ultrapassado!");
      alert("Faça seu login mais tarde!");
      window.close(); // Fecha a página atual
    } else {
      alert("Acesso negado. Tente novamente");
    }
    tentativaAtual++;
  }
}

var button = document.querySelector("button");
button.addEventListener("click", verificar);
