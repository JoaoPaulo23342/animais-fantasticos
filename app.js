const img = document.querySelector('img')

function callback(ev) {
  console.log(ev)
}
img.addEventListener('click', callback)