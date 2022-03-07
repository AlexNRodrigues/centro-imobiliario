var btn1 = document.querySelector("button.busca-ref1");
var btn2 = document.querySelector("button.busca-ref2");
btn1.addEventListener("click", function () {
  
  var div = document.querySelector("#referencia");
  var filtro1 = document.querySelector("#filtro1");
  var filtro2 = document.querySelector("#filtro2");
  var filtro3 = document.querySelector("#filtro3");

  if (div.style.display === "none") {

    div.style.display = "block";
    filtro1.style.display = "none";
    filtro2.style.display = "none";
    filtro3.style.display = "none";

    btn1.innerHTML = 'Busca por filtro';

  } else {
    div.style.display = "none";
    filtro1.style.display = "block";
    filtro2.style.display = "block";
    filtro3.style.display = "block";
    
    btn1.innerHTML = 'Busca por referência';
  }

})

btn2.addEventListener("click", function () {

  var divFixed = document.querySelector("#referencia-fixed");
  var filtroFixed1 = document.querySelector("#filtro-fixed1");
  var filtroFixed2 = document.querySelector("#filtro-fixed2");
  var filtroFixed3 = document.querySelector("#filtro-fixed3");

  if (div.style.display === "none") {

    divFixed.style.display = "block";
    filtroFixed1.style.display = "none";
    filtroFixed2.style.display = "none";
    filtroFixed3.style.display = "none";

    btn2.innerHTML = 'Busca por filtro';

  } else {
    
    divFixed.style.display = "none";
    filtroFixed1.style.display = "block";
    filtroFixed1.style.display = "block";
    filtroFixed1.style.display = "block";
    
    btn2.innerHTML = 'Busca por referência';
  }

})

document.addEventListener('scroll', rolar);

var ultimaPosicao = 60;
var telefone = document.querySelector("#telefone");
var formFixed = document.querySelector("#form-fixed");
var navbar = document.querySelector(".navbar");
var heroSection = document.querySelector(".hero-section");

function rolar() {
    var atualPosicao = window.scrollY;

    if (atualPosicao > ultimaPosicao) {
        telefone.style.display = "none";
        formFixed.style.display = "block";
        navbar.style.backgroundColor = "#6EADE7";
        heroSection.style.display = "none !important";
    } else {
        telefone.style.display = "block";
        formFixed.style.display = "none";
        navbar.style.backgroundColor = "transparent";
        heroSection.style.display = "flex  !important";
    }

      ultimaPosicao = atualPosicao;
}