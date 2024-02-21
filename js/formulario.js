import validacpf from "./validaCPF.js"
const camposDosFormulario = document.querySelectorAll("[required]")

camposDosFormulario.forEach((campo)=>{
    campo.addEventListener('blur', () => validaCampo(campo))
})

function validaCampo(campo){
    if(campo.name === "cpf" && campo.value.length >= 11){
        validacpf(campo)
    }
}