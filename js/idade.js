export default function VerificadorDeIdade(campo){
    const dataDeNascimento = new Date(campo.value)
    verificaIdade(dataDeNascimento) 
    if(!verificaIdade(dataDeNascimento)){
        campo.setCustomValidity("Você não possui 18 anos para usar o site")
    }
}

function verificaIdade(data){
    const dtAtual = new Date()
    const dtAniversario = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())
    return dtAtual >= dtAniversario
}