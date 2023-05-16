let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for (let index = 0; index < pacientes.length; index++) {

    let paciente = pacientes[index];

    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;

    let imc = paciente.querySelector(".info-imc");

    let pesoValido = validarPeso(peso);
    let alturaValida = validarAltura(altura);

    if (!pesoValido) {
        // pesoValido = false;
        imc.textContent = "Peso inválido!";
        paciente.classList.add("dado-invalido");
    }

    if (!alturaValida) {
        // alturaValida = false;
        imc.textContent = "Altura inválida!";
        paciente.classList.add("dado-invalido");
    }

    if (pesoValido && alturaValida) {
        let imcFormula = calcularImc(peso, altura);
        imc.textContent = imcFormula;

        if (imcFormula < 17) {
            paciente.classList.add("peso-muito-abaixo");
        }
        else if (imcFormula >= 17 && imcFormula < 18.5) {
            paciente.classList.add("peso-abaixo");
        }
        else if (imcFormula >= 18.5 && imcFormula < 25) {
            paciente.classList.add("peso-normal");
        }
        else if (imcFormula >= 25 && imcFormula < 30) {
            paciente.classList.add("peso-acima");
        }
        else if (imcFormula >= 30 && imcFormula < 35) {
            paciente.classList.add("peso-obesidade-I");
        }
        else if (imcFormula >= 35 && imcFormula <= 40) {
            paciente.classList.add("peso-obesidade-II");
        }
        else if (imcFormula > 40) {
            paciente.classList.add("peso-obesidade-III");
        }
    }
}

function calcularImc(peso, altura) {
    let imcFormula = 0;
    imcFormula = peso / (altura * altura);
    return imcFormula.toFixed(1);
}

function validarPeso(peso) {
    if (peso > 0 && peso <= 700) {
        return true;
    }
    else {
        return false;
    }
}

function validarAltura(altura) {
    if (altura > 0 && altura <= 3) {
        return true;
    }
    else {
        return false;
    }
}