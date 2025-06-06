// Captura o valor do parâmetro da URL
const params = new URLSearchParams(window.location.search);
const texto = params.get("texto");

// Referência ao elemento <h2> que será modificado
const titulo = document.querySelector(".texto_");

// Altera o conteúdo com base no parâmetro
if (texto === "1") {
    titulo.textContent = "Consulta";
} else if (texto === "2") {
    titulo.textContent = "Retorno";
} 
else {
    titulo.textContent = "Exames";
}

function toggleDropdown() {
      const container = document.getElementById('dropdown');
      container.classList.toggle('aberto');
}