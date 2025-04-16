function initTabNav() {
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')





function activeTab (i) {
    tabContent.forEach( (content) => {
        content.classList.remove('ativo')
    })
    tabContent[i].classList.add('ativo')
}

tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
        activeTab(index)
    })
})

} 
}
initTabNav()
function initAccordion() {
    this.classList.add('ativo')
    this.nextElementSibling.classList.toggle('ativo');
}
const accordionList = document.querySelectorAll('.js-accordion dt')
accordionList.forEach((item) => {
    item.addEventListener('click', initAccordion)
})







