const menu = document.querySelectorAll('a[href^="#"]')

menu.forEach((item) => {
    
    item.addEventListener('click', (ev) => {
        ev.preventDefault()
        const link = ev.target
        link.setAttribute('class', 'ativo')
})})

// mostra na tela cada elemento que for clicado
const all = document.querySelectorAll('body')

all.forEach((item) => {
    item.addEventListener('click', (ev) => {
        ev.preventDefault()
    console.log(ev.target)
    })
})

// remove o elemento clicado 

all.forEach((item) => {
    item.addEventListener('click', (ev) => {
        ev.preventDefault()
       let link = ev.target 
        let itemRemovido = link.remove()
        console.log(itemRemovido)
    })
})

all.forEach((item) => {
    item.addEventListener('keypress', (ev) => {
        ev.preventDefault()
        let key = ev.key
        for(let i = 0; i < item.length; i++) {
            item[i].style.fontSize = '2rem'
        }
        if(key === 't') {
            item.style.fontSize = '2rem'
        } else if (key === 'd') {
            item.style.fontSize = '1rem'
        }
    })
})


const h1 = document.querySelector('h1')

h1.innerHTML = 'Olá, Mundo!'
const faq = document.querySelector('#faq')
const lista = document.querySelector('.animais-lista')
const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
const mapa = document.querySelector('.mapa')


// o append child adiciona o elemento filho ao final da lista do elemento
// pai exemplo lista.appendChild(titulo)
//adiciona o elemento titulo ao final da lista

//contato.insertBefore(animais, mapa)

/* o insertBefore adiciona o elemento no inicio da lista do elemento pai
// exemplo lista.insertBefore(titulo, mapa)
// adiciona o elemento titulo antes do mapa
// o elemento do segundo parametro tem que ser obrigatoriamente filho
// do elemento pai que está sendo utilizado
*/

//contato.replaceChild(lista, titulo)

/* Criar novos Elementos 
Podemos Criar novos elementos utilizando o createElement, 
e depois adicionar ele na página com o appendChild ou insertBefore
*/
const novoH1 = document.createElement('h1') // cria um novo elemento h1
novoH1.innerHTML = 'Novo Título' // adiciona o texto dentro do h1
novoH1.classList.add('titulo') // adiciona a classe titulo ao h1
mapa.appendChild(novoH1)
// isso aqui adiciona o novoH1 dentro do elemento animais 

/* Clonar Elementos
todo elemento selecionado é único. para criarmos um novo elemento
baseado no anterior, é necessário ultilizar o método cloneNode()
*/

