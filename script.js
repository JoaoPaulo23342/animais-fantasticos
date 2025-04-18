
function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
  
    if(tabMenu.length && tabContent.length) {
      tabContent[0].classList.add('ativo');
  
      function activeTab(index) {
        tabContent.forEach((content) => {
          content.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
      }
  
      tabMenu.forEach((item, index) => {
        item.addEventListener('click', () => {
          activeTab(index);
        });
      });
    }
  }
  initTabNav();
  
  
  function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    
    if(accordionList.length) {
      accordionList[0].classList.add(activeClass);
      accordionList[0].nextElementSibling.classList.add(activeClass);
  
      function activeAccordion() {
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
      }
  
      accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
      });
    }
  }
  initAccordion();
  
  
  function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.menu a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
  initScrollSuave();


  function initScrollAnimation() {
    const sections = document.querySelectorAll('.js-scroll');
    
    function checkScroll() {
      const windowMetade = window.innerHeight * 0.6;
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        
        if(isSectionVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }
    
    checkScroll();
    window.addEventListener('scroll', checkScroll);
  }
  
  initScrollAnimation();