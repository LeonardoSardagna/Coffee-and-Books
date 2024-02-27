import validacpf from "./validaCPF.js";
import VerificadorDeIdade from "./idade.js";

const formulario = document.querySelector(".container_dados_cadastrais")

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()

    const listaDeDados = {
        "nome": e.target["nome"].value,
        "email": e.target["email"].value,
        "senha": e.target["senha"].value,
        "cpf": e.target["cpf"].value,
        "data": e.target["data"].value
    }

    localStorage.setItem("Cadastro", JSON.stringify(listaDeDados))
    window.location.href = 'camera.html'
})


const camposDosFormulario = document.querySelectorAll("[required]")
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternnMismatch',
    'tooShort',
    'customError'
]
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    senha: {
        valueMissing: "O campo de senha não pode estar vazio.",
        patternMismatch: "Por favor, preencha uma senha válido.",
        tooShort: "O campo de senha não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    data: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    }
};

camposDosFormulario.forEach((campo)=>{
    campo.addEventListener('blur', () => validaCampo(campo))
    campo.addEventListener('ivalid', evento => evento.preventDefault())
})
function validaCampo(campo){
    if(campo.name === "cpf" && campo.value.length >= 11){
        validacpf(campo)
    }

    if(campo.name === "data" && campo.value != ''){
        VerificadorDeIdade(campo)
    }
    let mensagem = ''
    
    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro]
        }
    })

    const areaMensagem = campo.parentNode.querySelector('.mensagem-erro')
    const validadorDeInput = campo.checkValidity()

    if(!validadorDeInput){
        areaMensagem.textContent = mensagem
    }else{
        areaMensagem.textContent = ''
    }

}