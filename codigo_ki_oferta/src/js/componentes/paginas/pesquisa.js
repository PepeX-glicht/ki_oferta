function pesquisa(app) {
    app.innerHTML = `
    <div class="container-buscar">
        <h2>Radar de Promoções</h2>
        <p class="subtitulo-buscar"> O que você quer comprar mais barato? </p>
        <div class="grupo-input"> 
           <input 
             type="text"
             id="input-busca"
             placeholder="Produto ou marca"
             aria-label="campo busca de produto"
        >
        <button id="btn-busca">
            <i data-lucide="arrow-right"></i>
        </button>
        </div>
        
        <div class="categorias-busca">
            <p>Categoria</p>
            <ul class="categoria-lista">
                  <li class="categoria-item">
                     <a href="#mercearia">Mercearia</a>
                  </li>
                  <li class="categoria-item">
                     <a href="#carne">Carnes</a>
                  </li>
                  <li class="categoria-item">
                     <a href="#hortifruti">Hortifruti</a>
                  </li>
                  <li class="categoria-item">
                     <a href="#bebidas">Bebidas</a>
                  </li>
                  <li class="categoria-item">
                    <a href="#limpeza">Limpeza</a>
                  </li>
                  <li class="categoria-item">
                    <a href="#higiene">Higiene</a>
                  </li>
            </ul>            
      </div>
</div>
      
    `
}

export default {
    url: "#pesquisa",
    label: "pesquisa",
    icon: "search",
    pagina: pesquisa
}

