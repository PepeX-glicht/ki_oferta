function usuario(app){
    app.innerHTML = `
    <div>
        <h1>
            pagina do usuario
        </h1>
    </div>
      
    `
}

export default {
    url: "#usuario",
    label: "usuario",
    icon: "user",
    pagina: usuario
}