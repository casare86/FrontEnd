export default function initTooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach((item) => {
        item.addEventListener("mouseover", onMouseOver);
    });

    function onMouseOver(event) {
        const tooltipBox = generateTooltipBox(this);
        tooltipBox.style.top = event.pageY  + "px";
        tooltipBox.style.left = event.pageX  +"px";
        
        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener("mousemove", onMouseMove); 
        //onMouseLeave attributes can be generated here or can be instantiated and just set the values
        onMouseLeave.tooltipBox = tooltipBox; 
        onMouseLeave.element = this;
        this.addEventListener('mouseleave',  onMouseLeave);    
    }

    //object
    const onMouseLeave = {
        // tooltipBox: "",
        // element: "",
        handleEvent(){
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave',  onMouseLeave);
            this.element.removeEventListener("mousemove", onMouseMove); 
        }
    }
    const onMouseMove = {
        handleEvent(event){
            this.tooltipBox.style.top = (event.pageY + 20) + "px";
            this.tooltipBox.style.left = (event.pageX + 20) +"px";
        }
    }
    function generateTooltipBox(element) {
        const tooltipBox = document.createElement("div");
        const text = element.getAttribute("aria-label");
        tooltipBox.classList.add("tooltip");
        tooltipBox.innerHTML = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }
}


