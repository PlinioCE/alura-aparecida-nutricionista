let botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function () {
        let respostaBusca = xhr.responseText;
        let buscaPacientes = JSON.parse(respostaBusca);
        buscaPacientes.forEach(function(paciente) {
            adicionarPacienteNaTabela(paciente);
        });
        pacientes = document.querySelectorAll(".paciente");
    });

    xhr.send();
});