const botaoIniciarCamera = document.querySelector(".imagem_rosto")
const campoCamera = document.querySelector(".formulario_camera")
const video = document.querySelector('.reconhecimento_facial')
const campoMensagem = document.querySelector(".formulario_mensagem")
const botaoTirarFoto = document.querySelector(".camera_botao")
const canvasImagem = document.querySelector(".canvas")
const botaoAbrirConta = document.querySelector(".abrir_conta")
 
let imagem = 

botaoIniciarCamera.addEventListener("click", async function(){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    botaoIniciarCamera.style.display = "none"
    campoCamera.style.display = "flex"
    video.srcObject = iniciarVideo
})

botaoTirarFoto.addEventListener("click", function(){
    canvasImagem.getContext('2d').drawImage(video, 0, 0, canvasImagem.width, canvasImagem.height)

    imagem = canvasImagem.toDataURL("image/jpeg")

    campoCamera.style.display = "none"
    campoMensagem.style.display = "flex"
})

botaoAbrirConta.addEventListener("click", ()=>{
    const receberdados = localStorage.getItem("Cadastro")
    const converter = JSON.parse(receberdados)

    converter.imagem = imagem

    localStorage.setItem("Cadastro", JSON.stringify(converter))

    window.location.href = ''

})