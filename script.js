const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');


function activeTab (i) {
    tabContent.forEach( (content) => {
        content.classList.remove('ativo')
    })
    tabContent[i].classList.add('ativo')
}









