export default function validacpf(campo){
    const cpf = campo.value.split(/[\.-]/).join("")
    console.log(verificaNumerosRepetido(cpf))
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
