let todosOsCards = document.querySelectorAll(".card");
todosOsCards.forEach((card) => {
  card.style.backgroundColor = "#FF6D0A";
});

let todosOsTitulos = document.querySelectorAll(".titulo-card");
todosOsTitulos.forEach((titulo) => {
  titulo.innerHTML = `<h3>Meu Card</h3>`;
  titulo.style.color = "#2b385b";
});

let todasAsDescricoes = document.querySelectorAll(".descricao-card");
todasAsDescricoes.forEach((descricao) => {
  descricao.innerHTML = `<p>Descrição modificada pelo JavaScript</p>`;
  descricao.style.color = "white";
  descricao.style.marginTop = "30px";
  descricao.style.marginBottom = "30px";
});

let todosOsBotoesEditar = document.querySelectorAll(".botao-editar");
todosOsBotoesEditar.forEach((editar) => {
  editar.style.backgroundColor = "green";
  editar.style.borderRadius = "7px";
  editar.style.height = "30px";
  editar.style.width = "50px";
  editar.style.color = "white";
  editar.style.border = "none";
  editar.setAttribute("onclick", "editarCard()");
});

function editarCard() {
  alert("Clicou em Editar!");
}

let todosOsBotoesApagar = document.querySelectorAll(".botao-apagar");
todosOsBotoesApagar.forEach((apagar) => {
  apagar.style.backgroundColor = "red";
  apagar.style.borderRadius = "7px";
  apagar.style.height = "30px";
  apagar.style.width = "50px";
  apagar.style.color = "white";
  apagar.style.border = "none";
  apagar.setAttribute("onclick", "apagarCard()");
});

function apagarCard() {
  if (confirm("Tem certeza que deseja apagar?")) {
    alert("Confirmado!");
  } else {
    alert("Cancelou!");
  }
}
