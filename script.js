function mensagemAviso(){
    let mensagemAvisoCoracao = document.querySelector(".mensagemAvisoCoracao")
    mensagemAvisoCoracao.textContent = "Em breve teremos essa funcionalidade!!!"
    mensagemAvisoCoracao.id = ""
    setTimeout(() => {
        mensagemAvisoCoracao.textContent = ""
        mensagemAvisoCoracao.id = "mensagemAvisoCoracao"
    },2000)
}

let navegacaoPrincipal = document.querySelector("#navegacaoPrincipal")
let ladoEsquerdoHeader = document.querySelector("#ladoEsquerdoHeader")
let ladoDireitoHeader = document.querySelector("#ladoDireitoHeader")

let observeMenuSecundario = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting === true ){
        navegacaoPrincipal.style.display = 'none'
    } else{
        navegacaoPrincipal.style.display = 'block'
    }
},{
    threshold: 0
})
observeMenuSecundario.observe(document.querySelector("#navegacaoSecundariaVisivel"))

