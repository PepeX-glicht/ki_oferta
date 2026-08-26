function renderNavbar(){
    const nav = document.querySelector("#navbar")
    nav.innerHTML = `
  <nav>  
    <ul class="nav-bottom">
      <li>
           <a href = "#home" class="nav-icon">
           
           <i data-lucide="house"></i>
           
           home
           </a>
      </li>
      <li>
        <a href="#Lista" class="nav-icon"> 
        <i data-lucide="badge-dollar-sign"> 
        </i>
        oferta
        </a>      
      </li>
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





    </ul>  
  </nav>  
    
    
    
    
    `

}

export {renderNavbar}