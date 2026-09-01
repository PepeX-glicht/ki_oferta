import {renderNavbar} from './componentes/navbar/navbar.js'
import {rotas} from './componentes/rotas/rotas.js'
import { createIcons, icons } from 'lucide';



renderNavbar(rotas)

createIcons({
  icons
});


const app = document.querySelector("#app")
app.innerHTML = "olá mundo"