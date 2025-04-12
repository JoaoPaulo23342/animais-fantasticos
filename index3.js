const menu = document.querySelectorAll('.menu')

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
