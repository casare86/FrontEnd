export default function initSmoothScroll(){
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