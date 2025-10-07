function abrirCarrinho() { //chama o carrinho pelo id
  document.getElementById("modalCarrinho").style.display = "block";
}
function fecharModalCarrinho() {
  document.getElementById("modalCarrinho").style.display = "none";
};

function irCadastro() { //chama o carrinho pelo id
  document.getElementById("modalUsuario").style.display = "block";
}
function fecharModalUsuario() {
  document.getElementById("modalUsuario").style.display = "none";
};

// Fecha o modal se o usuário clicar fora 
window.onclick = function (event) {
  const modalCarrinho = document.getElementById("modalCarrinho");
  const modalUsuario = document.getElementById("modalUsuario");

  if (event.target === modalCarrinho) modalCarrinho.style.display = "none";
  if (event.target === modalUsuario) modalUsuario.style.display = "none";
};

function entrarConta() {
  window.location.href = "../Cadastro-Login/index.html";
}

function irProduto(){
  window.location.href = "../Produto-Individual/produto.html";
}