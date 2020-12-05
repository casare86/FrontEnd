export default function initAccordion(){
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