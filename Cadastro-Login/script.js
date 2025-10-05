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