var btn = document.querySelector(".busca-ref");
btn.addEventListener("click", function () {
  var div = document.querySelector("#referencia");
  var filtro1 = document.querySelector("#filtro1");
  var filtro2 = document.querySelector("#filtro2");
  var filtro3 = document.querySelector("#filtro3");

  if (div.style.display === "none") {

    div.style.display = "block";
    filtro1.style.display = "none";
    filtro2.style.display = "none";
    filtro3.style.display = "none";

    btn.innerHTML = 'Busca por filtro';

  } else {
    div.style.display = "none";
    filtro1.style.display = "block";
    filtro2.style.display = "block";
    filtro3.style.display = "block";
    btn.innerHTML = 'Busca por referência';
  }

})