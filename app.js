


const h1 = document.querySelector('h1')
function handleEv(ev) {
    console.log(ev.type, ev)
}
window.addEventListener('scroll', handleEv)

const imgs = document.querySelectorAll('img')

imgs.forEach((img) => {
    console.log(img)
})