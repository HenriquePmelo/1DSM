function ex4() {
  p = document.createElement("p");
  texto = document.createTextNode("claudia");
  p.appendChild(texto);
  // seta o corpo da div saida
  no = document.querySelector("#saida");
  no.appendChild(p);
}
