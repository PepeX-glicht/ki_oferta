import { renderNavbar } from './componentes/navbar/navbar.js'
import { rotas } from './componentes/rotas/rotas.js'
import { createIcons, icons } from 'lucide';



renderNavbar(rotas)



const app = document.querySelector("#app")
app.innerHTML = "olá mundo"

function renderAPP() {
  const hash = window.location.hash || "#home"
  const rota = rotas.find(tela => tela.url === hash)
  if (rota) {
    rota.pagina(app)
  }else{
    app.innerHTML = "página não encontrada"
  }

}

window.addEventListener("hashchange", renderAPP)

renderAPP()
createIcons({icons});