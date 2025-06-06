const diasSemVaga = [1, 2, 5, 7, 8, 9, 12, 13, 14, 15, 16, 21];
    const diasComVaga = [6, 19, 20, 22, 23, 26, 27, 28, 29, 30];
    const tbody = document.querySelector("#calendario tbody");

    const primeiroDiaSemana = new Date(2025, 4, 1).getDay(); 
    const totalDias = 31;
    let dia = 1;

    for (let semana = 0; semana < 5; semana++) {
      let tr = document.createElement("tr");
      for (let d = 0; d < 7; d++) {
        let td = document.createElement("td");

        if (semana === 0 && d < primeiroDiaSemana) {
          td.innerHTML = "";
        } else if (dia <= totalDias) {
          td.innerHTML = dia;

          if (diasSemVaga.includes(dia)) {
            td.classList.add("vermelho");
          } else if (diasComVaga.includes(dia)) {
            td.classList.add("verde");
            td.addEventListener("click", () => {
              window.location.href = `medicos.html?dia=${dia}`;
            });
          } else {
            td.classList.add("branco");
          }

          dia++;
        } else {
          td.innerHTML = "";
        }

        tr.appendChild(td);
      }
      tbody.appendChild(tr);
}