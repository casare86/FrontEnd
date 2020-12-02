const activeClass = "active"; //CSS class used in many functions
initTabNav();
initAccordion();
initSmoothScroll();
initAnimateScroll();

function initTabNav(){
    const tabMenu = document.querySelectorAll(".js-tabMenu li");
    const tabContent = document.querySelectorAll(".js-tabContent section");
    tabContent[0].classList.add(activeClass);

    if(tabMenu.length > 0 && tabContent.length > 0)
    {
        function activeTab(index){
        tabContent.forEach((content) => {
            content.classList.remove(activeClass);
        });
        tabContent[index].classList.add(activeClass);
        }
        tabMenu.forEach((itemMenu, index) =>{
        // itemMenu.addEventListener("click", function(){
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}


//accordeon list
function initAccordion(){
    const accordionList = document.querySelectorAll(".js-accordion dt");
    if(accordionList.length){
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        function activeAccordeon(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordeon);
        });
    }
}

function initSmoothScroll(){
    const anchorLinks = document.querySelectorAll(".js-menu a[href^='#']");
    function scrollToSection(event){
        console.log(event);
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        //window.scrollTo(0, section.offsetTop); // .scrollTo(x,y); in pixels
        // window.scrollTo({ //Object
        //     top: section.OffsetTop,
        //     behavior: "smooth",
        // });
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        console.log(href);
    }
    anchorLinks.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}

function initAnimateScroll(){
    const sections = document.querySelectorAll(".js-scroll");
    if(sections.length)
    {
        const windowHeight = window.innerHeight;
        function animateScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - (windowHeight * 0.6)) < 0;
                if(isSectionVisible)
                    section.classList.add(activeClass);
            });
        }
        animateScroll();
        window.addEventListener("scroll", animateScroll); 
    }
}