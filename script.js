const arrVitrine = []
const vitrine = document.querySelector(".vitrine")
const nada = document.querySelector(".nada")
const listaDeCards = [
    {
        nome: "Lightweight Jacket",
        preco: "R$ 100,00",
        categoria: "Camisetas",
        descricao: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        url: "/pic/Men-Jacket-Front-Black__15466 1.png",
        
    },
    {
        nome: "Black Hat",
        preco: "R$ 100.00",
        categoria: "Acessórios",
        descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        url: "/pic/image 1.png",
    },
    {
        nome: "Mask",
        preco: "R$ 40,00",
        categoria: "Acessórios",
        descricao: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        url: "/pic/Surgical-Mask-Black__89554 1.png",
    },
    {
        nome: "T-Shirt",
        preco: "R$ 100,00",
        categoria: "Camisetas",
        descricao: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        url: "/pic/Men-TShirt-Black-Front__70046 1.png",
    },
    {
        nome: "Short-Sleeve T-Shirt",
        preco: "R$ 100,00",
        categoria: "Camisetas",
        descricao: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
        url: "/pic/mockup-a0dc2330__62146 1.png",
    },
    {
        nome: "Champion Packable Jacket",
        preco: "R$ 100,00",
        categoria: "Camisetas",
        descricao: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
        url: "/pic/mockup-9b9894f1__67347 1.png",
    }

]

function criarCard(obj){
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
    valorProduto.innerText = listaDeCards[i].preco
    addCar.type = "button"
    addCar.value = "Adicionar ao carrinho"

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

    arrVitrine.push(vitrine)
}
criarCard()
