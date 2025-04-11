


const h1 = document.querySelector('h1')
function handleEv(ev) {
    console.log(ev.type, ev)
}


const imgs = document.querySelectorAll('img');

function handleImg(ev) {
   console.log(ev.target);
} 

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
});