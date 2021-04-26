var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona-paciente");
    var paciente = obtemPacienteDoForm(form);

  

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErros(erros);
        return;
    }

    

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var ul =document.querySelector("#mensagem-erro");
    ul.innerHTML = "";


});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabelaBody = document.querySelector("#tabela-pacientes");
    tabelaBody.appendChild(pacienteTr);
}



function obtemPacienteDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var erros = [];
    var reg = /\d+/;

    if(paciente.nome.length == 0 || reg.exec(paciente.nome)){
        erros.push("Nome do paciente inválido!!");
    }

    if (!validaPeso(paciente.peso) || paciente.peso.length == 0) {
        erros.push("O peso é inválido!");
    }
    if (!validaAltura(paciente.altura) || paciente.altura.length == 0) {
        erros.push("A altura é inválida!");
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura é inválida!!")
    }

    return erros;
}
function exibeMensagensDeErros(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


