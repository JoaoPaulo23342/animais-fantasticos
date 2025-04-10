const menu = document.querySelectorAll('.menu *')

menu.forEach(element => {
    element.classList.add('ativo')
    console.log(element)
});



menu.forEach((item, index) => {
    item.classList.remove('ativo')
    console.log(item)
})













