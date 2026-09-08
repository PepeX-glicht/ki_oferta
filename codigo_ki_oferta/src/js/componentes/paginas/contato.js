function contato(app){
    app.innerHTML = `
    <div>
        <h1>
            pagina de contato
        </h1>
    </div>
      
    `
}

export default {
    url: "#contato",
    label: "contato",
    icon: "mail",
    pagina: contato
}