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
