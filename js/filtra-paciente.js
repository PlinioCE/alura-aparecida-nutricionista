let filtrarPaciente = document.querySelector(".filtro-paciente");

filtrarPaciente.addEventListener("input", function () {
    // console.log(this.value);
    // var pacientes = document.querySelectorAll(".paciente")

    if (this.value.length > 0) {
        for (let indicePaciente = 0; indicePaciente < pacientes.length; indicePaciente++) {
            let filtroPaciente = pacientes[indicePaciente];
            let nomePaciente = filtroPaciente.querySelector(".info-nome");
            let filtroNome = nomePaciente.textContent;
            let expReg = new RegExp(this.value, "i");
            if (!expReg.test(filtroNome)) {
                filtroPaciente.classList.add("invisivel");
            } else {
                filtroPaciente.classList.remove("invisivel");
            }
        }
    } else {
        for (indicePaciente = 0; indicePaciente < pacientes.length; indicePaciente++) {
            filtrarPaciente = pacientes[indicePaciente];
            filtrarPaciente.classList.remove("invisivel")
        }
    }
});