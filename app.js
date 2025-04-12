const img = document.querySelector('img')

function callback(ev) {
  console.log(ev)
}

function callBackList(event) {
    
}
const imagensList = document.querySelector('.animais-lista')

imagensList.addEventListener('click', callBackList)

// CurrentTarget Exibe o elemento global do evento
// target Exibe o elemento que disparou o evento
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