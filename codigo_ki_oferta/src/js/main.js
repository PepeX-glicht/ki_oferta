import {renderNavbar} from './componentes/navbar/navbar.js'
import { createIcons, icons } from 'lucide';



renderNavbar()

createIcons({
  icons
});


const app = document.querySelector("#app")
app.innerHTML = "olá mundo"