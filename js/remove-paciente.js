let removerPaciente = document.querySelector("#tabela-pacientes");

removerPaciente.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("remove-linha");

    setTimeout(function () {
        event.target.parentNode.remove();
    }, 700);

});
