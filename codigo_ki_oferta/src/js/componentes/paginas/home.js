function home(app){
    app.innerHTML = `
    <div>
        <h1>
            pagina inicial
        </h1>
    </div>
      
    `
}

export default {
    url: "#home",
    label: "home",
    icon: "house",
    pagina: home
}