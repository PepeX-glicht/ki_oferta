function renderNavbar(rotas) {
  console.log(rotas)
  const nav = document.querySelector("#navbar")
  nav.innerHTML = `
  <nav>  
    <ul class="nav-bottom">
         ${

    rotas.map((menu) =>
      `<li><a href="${menu.url}"class="nav-icon"><i data-lucide="${menu.icon}"></i> ${menu.label}</a></li>`)

  } 


<li>
        <a href="#Lista" class="nav-icon"> 
           <i data-lucide="search"></i>
        </i>
        pesquisar
        </a>      
      </li>



      <li>
        <a href="#Lista" class="nav-icon"> 
  
<i data-lucide="user"></i>
        </i>
        usuario
        </a>      
      </li>


      <li>
        <a href="#Lista" class="nav-icon"> 
<i data-lucide="mail"></i>
        </i>
        contato
        </a>      
      </li>
       <a href="#menu" class="nav-icon"> 

<i data-lucide="menu"></i>  

        menu
        </a>    
       <li>
       
       
       </li>



    </ul>  
  </nav>  
    
    
    
    
    `

}

export { renderNavbar }