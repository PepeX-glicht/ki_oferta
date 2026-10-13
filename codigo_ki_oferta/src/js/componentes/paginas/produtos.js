import produtos from '../../dadosMockados/produto.js'

function exibirProdutos(app, categoria=""){
    const filtroProdutos = categoria ? produtos.filter(produto => produto.categoria === categoria) : produtos;
    app.innerHTML = filtroProdutos.map(produto => `
        <div class="card">
         <img src "${produto.img}" alt="${produto.nome}">
         <div class="card-body">
             <h5>${produto.nome}</h5>
            <p>R$ ${produto.preco.toFixed(2)}</p>
         </div>
    </div>
    
         `).join("")

         //location.hash = categoria ? `#produtos/${categoria}` : "#produtos"
}

export default {
    url: "#pesquisa",
    label: "",
    icon: "search",
    pagina: exibirProdutos
}