let filtrarPaciente = document.querySelector(".filtro-paciente");
let pacientes = document.querySelectorAll(".paciente");

function filtrarPacientes() {
    if (filtrarPaciente.value.length > 0) {
        for (let indicePaciente = 0; indicePaciente < pacientes.length; indicePaciente++) {
            let filtroPaciente = pacientes[indicePaciente];
            let nomePaciente = filtroPaciente.querySelector(".info-nome");
            let filtroNome = nomePaciente.textContent;
            let expReg = new RegExp(filtrarPaciente.value, "i");
            if (!expReg.test(filtroNome)) {
                filtroPaciente.classList.add("invisivel");
            } else {
                filtroPaciente.classList.remove("invisivel");
            }
        }
    } else {
        for (let indicePaciente = 0; indicePaciente < pacientes.length; indicePaciente++) {
            let filtroPaciente = pacientes[indicePaciente];
            filtroPaciente.classList.remove("invisivel")
        }
    }
}

filtrarPaciente.addEventListener("input", filtrarPacientes);
window.addEventListener("load", filtrarPacientes);