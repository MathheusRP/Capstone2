const listaProduto = document.querySelector ('.produtoList')
const compras = document.querySelector('.lista')
let somaCarrinho = document.querySelector ('.total')


function listarProdutos(lista, local){
    if(listaDeCompras == ""){
        compras.innerHTML = `
        <div id="vazio" class="mostrar">
        <h3>Carrinho vázio</h3>
        <p>Adicione itens</p>
        </div>`
    }else{
        compras.innerText = ""
    }
    if(listaDeCompras == "") {
    
        somaCarrinho.classList = ('total')
    }else{
        
        somaCarrinho.classList = ('total mostrar')
    }
    for(let i = 0; i < lista.length; i++){
        let item = lista[i]

        if(lista == data){
        card = montarCard(item)
        }
        if(lista == listaDeCompras){
            card = carrinho(item)
        }

        local.append(card)   
    }
}
listarProdutos(data, listaProduto)

function montarCard(item){
let itemId                    = item.id
let itemImg                   = item.img
let itemNome                  = item.nameItem
let description               = item.description
let itemValor                 = item.value
let itemTag                   = item.tag[0]

let li                        = document.createElement ('li')
li.className = ('produto') 

li.innerHTML = `
<img src="${itemImg}" alt="${itemNome}">
<main>
    <p class="tipo">${itemTag}</p>
    <h3>${itemNome}</h3>
    <p class="descricao">
        ${description} 
    </p>
    <p class="valor">R$ ${itemValor}</p>
    <button id="${itemId}" class="botao">Adicionar ao carrinho</button>
</main>
`
return li
}

// Carrinho de compras //

function carrinho(item){
let itemId                    = item.id
let itemImg                   = item.img
let itemNome                  = item.nameItem
let itemValor                 = item.value

let li                        = document.createElement ('li')

li.innerHTML = `
<img src="${itemImg}" alt="${itemNome}">
    <main>
        <h3>${itemNome}</h3>
        <p class="valor">R$ ${itemValor}</p>
        <button id="${itemId}" class="botao">Remover produto</button>
    </main>
`
return li
}
listarProdutos(listaDeCompras, compras)


// BOTÕES //

listaProduto.addEventListener('click', addCarrinho)

function addCarrinho(event){
    origemClick = event.target
    if(origemClick.tagName == "BUTTON"){
        btnId = origemClick.id

        for(let i = 0; i < data.length; i++){
            if(btnId == data[i].id){
                itemEscolhido = data[i]
                listaDeCompras.push(itemEscolhido)
            }
        }
        listarProdutos(listaDeCompras, compras)
        somarValor(listaDeCompras)
    }
}

let valorTotal = document.querySelector ('.valorTotal')
let itemQuantidade = document.querySelector ('.quantidade')
function somarValor(listaDeCompras){
    let total = 0
    let quantidade = 0

    for(let i = 0; i < listaDeCompras.length; i++){
        total += listaDeCompras[i].value
        quantidade += 1
    }
    itemQuantidade.innerText = `${quantidade}`
    valorTotal.innerText = `R$ ${total}`
}

// REMOVENDO ITENS //

compras.addEventListener('click', remover)

function remover(event){
    btnRemover = event.target
    let index = ""
    if(btnRemover.tagName == "BUTTON"){
        for(let i = 0; i < listaDeCompras.length; i++){
            if(listaDeCompras[i].id == btnRemover.id){
                index = i
            }
        }
        listaDeCompras.splice(index, 1)
        listarProdutos(listaDeCompras, compras)
        somarValor(listaDeCompras)
    }
}

