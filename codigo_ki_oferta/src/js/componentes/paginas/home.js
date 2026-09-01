function home(app){
    app.innerHTML = `
    <div>
        <h1>
            pagina de inicial
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