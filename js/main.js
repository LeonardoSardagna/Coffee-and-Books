let livros = [];
const endereco = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
const areaDoCarrossel = document.getElementById("carrossel");

async function buscaDados(){
    const resposta = await fetch(endereco)
    livros = await resposta.json()
    mostraLivrosNaTela(livros)
}

function mostraLivrosNaTela(listaDeLivros){
    areaDoCarrossel.innerHTML = ''
    listaDeLivros.forEach(livro => {
        areaDoCarrossel.innerHTML += `
        <div class="swiper-slide"><img src="${livro.imagem}" alt="${livro.alt}">
        <div id="preco_descricao">
            <h1 class="preco_titulo">${livro.titulo}</h1>
            <p class="autor">${livro.autor}</p>
            <p class="preco">R$${livro.preco}</p>
        </div> 
        </div>
        `
    });
}

buscaDados()
