const arrVitrine = []
const arrcarrinho = []
const prego = []
const vitrine = document.querySelector(".vitrine")
const nada = document.querySelector(".nada")
const carrinho = document.querySelector(".carrinho")
const aside = document.querySelector("aside")
const listaDeCards = [

    {
        nome: "Lightweight Jacket",
        preco: 100,
        categoria: "Camisetas",
        descricao: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        url: "/pic/Men-Jacket-Front-Black__15466 1.png",
        
    },
    {
        nome: "Black Hat",
        preco: 100,
        categoria: "Acessórios",
        descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        url: "/pic/image 1.png",
    },
    {
        nome: "Mask",
        preco:  40,
        categoria: "Acessórios",
        descricao: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        url: "/pic/Surgical-Mask-Black__89554 1.png",
    },
    {
        nome: "T-Shirt",
        preco: 100,
        categoria: "Camisetas",
        descricao: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        url: "/pic/Men-TShirt-Black-Front__70046 1.png",
    },
    {
        nome: "Short-Sleeve T-Shirt",
        preco: 100,
        categoria: "Camisetas",
        descricao: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
        url: "/pic/mockup-a0dc2330__62146 1.png",
    },
    {
        nome: "Champion Packable Jacket",
        preco: 100.00,
        categoria: "Camisetas",
        descricao: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
        url: "/pic/mockup-9b9894f1__67347 1.png",
    }

]
function criarPadrao(){
    carrinho.innerHTML = `
    <div class="conteudoCarrinho">
        <h3>Carrinho Vazio</h3>
        <p class="addCarrinho">Adicionar iten</p>
    </div>
    `;
    
}
criarPadrao()
const carrinhoPadrao = document.querySelector(".conteudoCarrinho")

function criarCard(){
    nada.remove()
    for(let i = 0; i<listaDeCards.length; i++){
    const iten = document.createElement("div")
    const img = document.createElement("img")
    const sobreIten = document.createElement("div")
    const categoria = document.createElement("p")
    const nome = document.createElement("p")
    const descricaoProduto = document.createElement("p")
    const valorProduto = document.createElement("span")
    const addCar = document.createElement("input")

    iten.className = "iten"
    img.src = listaDeCards[i].url
    img.alt = listaDeCards[i].nome
    sobreIten.className = "sobreIten"
    categoria.className = "categoria"
    categoria.innerText = listaDeCards[i].categoria
    nome.className = "nome"
    nome.innerText = listaDeCards[i].nome
    descricaoProduto.className = "descricaoProduto"
    descricaoProduto.innerText = listaDeCards[i].descricao
    valorProduto.className = "valorProduto"
    valorProduto.innerText = `R$ ${listaDeCards[i].preco.toFixed(2)}`
    addCar.type = "button"
    addCar.value = "Adicionar ao carrinho"
    addCar.className = "addCar"

    sobreIten.appendChild(categoria)
    sobreIten.appendChild(nome)
    sobreIten.appendChild(descricaoProduto)
    sobreIten.appendChild(valorProduto)
    sobreIten.appendChild(addCar)
    iten.appendChild(img)
    iten.appendChild(sobreIten)
    vitrine.appendChild(iten)

    arrVitrine.push(vitrine)
    }
    
}
criarCard()
//Carrinho

let value = 0
vitrine.addEventListener('click', addCarrinho)
function addCarrinho(add){
    const addCar = add.target;
    const card = addCar.parentElement
    const armazenadorNome = card.children[1].textContent
    if(addCar.className === 'addCar'){
        if(arrcarrinho.length == 0){
            const carrinhoPadrao = document.querySelector(".conteudoCarrinho")
            carrinhoPadrao.remove()
            valorBarr()
        } 
    } 
    for(i = 0; i<listaDeCards.length;i++){
        if(armazenadorNome === listaDeCards[i].nome){
            const iten = document.createElement("section")
            iten.className = "iten"
            const carrinhoPic = document.createElement("div")
            carrinhoPic.className = "carrinhoPic"
            const img = document.createElement("img")
            img.src = listaDeCards[i].url
            img.alt = listaDeCards[i].nome
            const sobreIten = document.createElement("div")
            sobreIten.className = "sobreIten"
            const nomeDoIten = document.createElement("p")
            nomeDoIten.className = "nomeDoIten"
            nomeDoIten.innerText = listaDeCards[i].nome
            const valor = document.createElement("span")
            valor.className = "valorProduto"
            valor.innerText = `R$ ${listaDeCards[i].preco.toFixed(2)}`
            const botao = document.createElement("input")
            botao.type = "button"
            botao.value = "Remover Produto"


            sobreIten.appendChild(nomeDoIten)
            sobreIten.appendChild(valor)
            sobreIten.appendChild(botao)
            carrinhoPic.appendChild(img)
            iten.appendChild(carrinhoPic)
            iten.appendChild(sobreIten)
            carrinho.appendChild(iten)
            arrcarrinho.push(listaDeCards[i].nome)
            prego.push(listaDeCards[i].preco)
            value = 0
            for(let i = 0; i< prego.length ;i++){
                console.log(prego[i])
                value += prego[i]
            }
            valorBarr(value)
        }
    } 
}
carrinho.addEventListener('click', rmvCarrinhoButton)
function rmvCarrinhoButton(rmv){
    /*console.log(carrinho[0])
    carrinho.filter((produto)=> produto !== rmvCar)
    console.log(carrinho)*/
    const rmvCar = rmv.target/*.closest("section")*/
    const card = rmvCar.parentElement
    const cardtotal = card.parentElement
    const armazenadorNome = card.children[0].textContent
    
    if(rmvCar.tagName == 'INPUT'){
        for(i=0; i<arrcarrinho.length;i++){

            if(armazenadorNome === arrcarrinho[i]){
                cardtotal.remove()
                arrcarrinho.splice(i, 1)
                prego.splice(i,1)
                value = 0
                for(let i = 0; i< prego.length ;i++){

                    value += prego[i]
                }
                valorBarr(value)
            }
            
        }
        
    }
    if(arrcarrinho.length == 0){
        const  total = document.querySelector(".total")
        total.remove()
        criarPadrao()
    }

}
const total = document.createElement("div")
function valorBarr(value){
    total.innerHTML = "" 
    total.className = "total"
    const spanV = document.createElement("span")
    spanV.innerText = "R$ " + value
    const pV = document.createElement("p")
    pV.innerText = "Total:"
    const valorT = document.createElement("div")
    valorT.className = "valorTotal"
    const spanQ = document.createElement("span")
    spanQ.innerText = prego.length
    const pQ = document.createElement("p")
    pQ.innerText = "Quantidade:"
    const quantidade = document.createElement("div")
    quantidade.className = "quantidade"
    

    quantidade.appendChild(pQ)
    quantidade.appendChild(spanQ)
    valorT.appendChild(pV)
    valorT.appendChild(spanV)
    total.appendChild(quantidade)
    total.appendChild(valorT)
    aside.appendChild(total)

}