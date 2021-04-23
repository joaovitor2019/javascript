

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;


    var tdImd = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    console.log(pesoEhValido);

    if (!pesoEhValido) {
        console.log("Peso Inválido");
        tdImd.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValido) {
        console.log("Altura Inválido");
        tdImd.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValido && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImd.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
    return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3.00) {
    return true;
    }else{
        return false;
    }
}


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}




