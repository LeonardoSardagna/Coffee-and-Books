export default function VerificadorDeIdade(campo){
    const dataDeNascimento = new Date(campo.value)
    verificaIdade(dataDeNascimento) 
}

function verificaIdade(data){
    const dtAtual = new Date()
    const dtAniversario = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())
    if(dtAtual >= dtAniversario){
        console.log("Cadastro liberado")
    }else{
        console.log("Cadastro negado. Cadastro permitido a partir de 18 anos")
    }


}