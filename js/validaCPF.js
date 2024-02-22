export default function validacpf(campo){
    const cpf = campo.value.split(/[\.-]/).join("");
    if(verificaNumerosRepetido(cpf) || primeiroDigito(cpf) || segundoDigito(cpf)){
        console.log(`O CPF ${cpf} não é valido`)
    }else{
        console.log("CPF valido")
    }
}

function verificaNumerosRepetido(cpf){
    let arraycpf = cpf.split("");
    let numerosRepetido = true;

    for(let i = 1; i < arraycpf.length; i++){
        arraycpf[i-1] == arraycpf[i] ? numerosRepetido : numerosRepetido = false

        if(!numerosRepetido){
            return numerosRepetido
        }
    }
    return numerosRepetido
}

function primeiroDigito(cpf){
    let soma = 0
    let multiplicador = 10

    for(let i = 0; i < 9; i++){
        soma += cpf[i] * multiplicador
        multiplicador--
    }

    soma = (soma * 10) % 11

    if(soma == 10){
        soma = 0
    }

    return soma != cpf[9]
}

function segundoDigito(cpf){
    let soma = 0
    let multiplicador = 11

    for(let i = 0; i < 10; i++){
        soma += cpf[i] * multiplicador
        multiplicador--
    }

    soma = (soma * 10) % 11

    if(soma == 10){
        soma = 0
    }

    return soma != cpf[10]
}