const img = document.querySelector('img')

function callback(ev) {
  console.log(ev)
}

function callBackList(event) {
    
}
const imagensList = document.querySelector('.animais-lista')

imagensList.addEventListener('click', callBackList)

// CurrentTarget Exibe o elemento global do evento
// target Exibe o elemento que disparou o evento (o evento especifico)
// type verifica o tipo do evento retornando uma string 
const linkExterno = document.querySelector('a[href^="http"]')
function handleLinkExterno(ev) {
    ev.preventDefault() // previne o comportamento padrão do link
    console.log('clicou')
    
    
    
}


linkExterno.addEventListener('click', handleLinkExterno)

/*
 A palavra chave this é uma palavra especial no JS, que pode fazer
referência a diferentes objetos dependendo do contexto em que é usada.
No caso de um evento, o this se refere ao elemento que disparou o evento.
*/

function chamarAtras() {
    console.log(this)
    console.log(this.getAttribute('src'))

}
img.addEventListener('click', chamarAtras)

/* ForEach e Eventos
    O método addEventListener é adicionado à um único elemento, então
    é necessário um loop entre elementos de uma lista para adicionarmos
    à cada um deles o evento desejado.
*/

const imgs = document.querySelectorAll('.animais-lista')
function imgSrc(ev) {
    const src = ev.currentTarget.getAttribute('src')
    console.log(ev.target.getAttribute('alt'))
}

imgs.forEach((img) => {
    img.addEventListener('click', imgSrc)
})


const menu = document.querySelectorAll('.menu')

menu.forEach((item) => {
    menu.preventDefault()
    item.addEventListener('click', (ev) => {
        
        item.setAttribute('class', 'ativo')
})})