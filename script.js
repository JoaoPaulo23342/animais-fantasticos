const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
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









