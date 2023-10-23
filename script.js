//kode for å lære litt DOM

const lista = document.getElementById("List");
const node = document.createElement("li");
const textnode = document.createTextNode("Oppgave 4");
node.appendChild(textnode);
lista.appendChild(node);

