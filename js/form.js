let botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");
botaoAdicionarPaciente.addEventListener("click", function (event) {  // criando evento com uma função anônima
    event.preventDefault();
    let formularioPaciente = document.querySelector("#form-adicionar");  // variável para armezenar campos do paciente
    let paciente = obterPacienteDoFormulario(formularioPaciente);  // chamando a função de criação do objeto


    let erroNome = verificarNome(paciente);
    if (erroNome.length > 0) {
        let msgErroNome = document.querySelector("#erro-nome")
        msgErroNome.textContent = erroNome;
        return msgErroNome;
    }

    let erroPeso = verificarPeso(paciente);
    if (erroPeso.length > 0) {
        let msgErroPeso = document.querySelector("#erro-peso")
        msgErroPeso.textContent = erroPeso;
        return msgErroPeso;
    }

    let erroAltura = verificarAltura(paciente);
    if (erroAltura.length > 0) {
        let msgErroAltura = document.querySelector("#erro-altura")
        msgErroAltura.textContent = erroAltura;
        return msgErroAltura;
    }

    let erroGordura = verificarGordura(paciente);
    if (erroGordura.length > 0) {
        let msgErroGordura = document.querySelector("#erro-gordura")
        msgErroGordura.textContent = erroGordura;
        return msgErroGordura;
    }

    adicionarPacienteNaTabela(paciente);

    formularioPaciente.reset();  // limpa os dados do formulário após adicionar paciente
});

function adicionarPacienteNaTabela(paciente) {
    let itemTr = montarTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");  // variável para armazenar a tabela
    tabela.appendChild(itemTr);  // definindo hierarquia - tabela(pai) -> itemTr(filho)
}

function obterPacienteDoFormulario(form) {  // função para criação do objeto
    let paciente = {  // variável para armazenar objetos
        nome: form.nome.value,  // variável para armazenar o valor do campo nome do formulário
        peso: form.peso.value,  // variável para armazenar o valor do campo peso do formulário
        altura: form.altura.value,  // variável para armazenar o valor do campo altura do formulário
        gordura: form.gordura.value,  // variável para armazenar o valor do campo gordura do formulário
        imc: calcularImc(form.peso.value, form.altura.value)  // chamando a função do arquivo 'calcula-imc.js'
    }
    return paciente;
}

function montarTr(paciente) {
    let pacienteTr = document.createElement("tr");  // variável para armazenar o elemento tabela
    pacienteTr.classList.add("paciente");  // atribuindo a classe 'paciente' a nova <tr>

    let nomeTd = montarTd(paciente.nome, "info-nome");  // chamando a função 'montaTd' e informando os atributos
    let pesoTd = montarTd(paciente.peso, "info-peso");  // chamando a função 'montaTd' e informando os atributos
    let alturaTd = montarTd(paciente.altura, "info-altura");  // chamando a função 'montaTd' e informando os atributos
    let gorduraTd = montarTd(paciente.gordura, "info-gordura");  // chamando a função 'montaTd' e informando os atributos
    let imcTd = montarTd(paciente.imc, "info-imc");  // chamando a função 'montaTd' e informando os atributos

    nomeTd.classList.add("info-nome");  // atribuindo a classe a nova <td>
    pesoTd.classList.add("info-peso");  // atribuindo a classe a nova <td>
    alturaTd.classList.add("info-altura");  // atribuindo a classe a nova <td>
    gorduraTd.classList.add("info-gordura");  // atribuindo a classe a nova <td>
    imcTd.classList.add("info-imc");  // atribuindo a classe a nova <td>

    nomeTd.textContent = paciente.nome;  // pegando apenas o valor da variável
    pesoTd.textContent = paciente.peso;  // pegando apenas o valor da variável
    alturaTd.textContent = paciente.altura;  // pegando apenas o valor da variável
    gorduraTd.textContent = paciente.gordura;  // pegando apenas o valor da variável
    imcTd.textContent = paciente.imc;  // chamando a função do arquivo 'calcula-imc.js'

    pacienteTr.appendChild(nomeTd);  // definindo hierarquia - pacienteTr(pai) -> nomeTd(filho)
    pacienteTr.appendChild(pesoTd);  // definindo hierarquia - pacienteTr(pai) -> pesoTd(filho)
    pacienteTr.appendChild(alturaTd);  // definindo hierarquia - pacienteTr(pai) -> alturaTd(filho)
    pacienteTr.appendChild(gorduraTd);  // definindo hierarquia - pacienteTr(pai) -> gorduraTd(filho)
    pacienteTr.appendChild(imcTd);  // definindo hierarquia - pacienteTr(pai) -> imcTd(filho)

    return pacienteTr;
}

function montarTd(dado, classe) {
    let td = document.createElement("td");  // variável para armazenar o item da tabela
    td.classList.add(classe);  // atribuindo a classe a nova <td>
    td.textContent = dado;  // pegando apenas o valor da variável
    return td;
}

function verificarNome(paciente) {
    let span = document.querySelector("#erro-nome");
    span.innerHTML = "";

    if (paciente.nome.length < 3) {
        return "Valor do campo inválido!"
    }
    else {
        return "";
    }
}

function verificarPeso(paciente) {
    let span = document.querySelector("#erro-peso");
    span.innerHTML = "";

    if (!validarPeso(paciente.peso) || validarPeso(paciente.peso).length == 0) {
        return "Valor do campo inválido!";
    }
    else {
        return "";
    }
}
function verificarAltura(paciente) {
    let span = document.querySelector("#erro-altura");
    span.innerHTML = "";

    if (!validarAltura(paciente.altura) || validarAltura(paciente.altura).length == 0) {
        return "Valor do campo inválido!";
    }
    else {
        return "";
    }
}

function verificarGordura(paciente) {
    let span = document.querySelector("#erro-gordura");
    span.innerHTML = "";

    if (paciente.gordura.length < 1) {
        return "Valor do campo inválido!"
    }
    else {
        return "";
    }
}
