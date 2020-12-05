export default function initAnimateScroll(){
    const sections = document.querySelectorAll(".js-scroll");
    const activeClass = "active";
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