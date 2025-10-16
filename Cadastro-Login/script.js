let card = document.querySelector(".card");
let loginButton = document.querySelector(".loginButton");
let cadastroButton = document.querySelector(".cadastroButton");
let entrarButton = document.querySelector(".entrarButton");
let cadastrarButton = document.querySelector(".cadastrarButton");
let exit = document.querySelector(".exit");
let exitWhite = document.querySelector(".exitWhite");

entrarButton.onclick = () => {
    window.location.href = "../Home/index.html"
}

cadastrarButton.onclik = () => {
    window.location.href = "" // FALTA COLOCAR PARA ONDE VAI DEPOIS QUE CADASTRA!!
}

loginButton.onclick = () => {
    card.classList.remove('cadastroActive');
    card.classList.add('loginActive');
}

cadastroButton.onclick = () => {
    card.classList.remove('loginActive');
    card.classList.add('cadastroActive');
}

exit.onclick = () => {
    window.location.href = "../Home/index.html"
}

exitWhite.onclick = () => {
    window.location.href = "../Home/index.html"
}
document.getElementById('add-btn').onclick = function () {
    const cpf = document.getElementById('cpf-input').value;
    const nome = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const senha = document.getElementById('senha-input').value;


    document.getElementById('cpf-input').value = "";
    document.getElementById('name-input').value = "";
    document.getElementById('email-input').value = "";
    document.getElementById('senha-input').value = "";
   

    fetch('http://localhost:3000/insert', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        cpf: cpf,
        nome: nome,
        email: email,
        senha: senha
        
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        insertRowIntoTable(data['data']);
        location.reload();
      });
  };