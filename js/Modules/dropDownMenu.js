import outsideClick from "./outsideClick.js";

export default function initDropDownMenu(){
    const dropDownMenus = document.querySelectorAll("[data-dropdown]");
    console.log("rop ativo");
    dropDownMenus.forEach(menu => {
        //touchstart is the trigger equivalent to click in mobile
        //click will work for mobile as well, but it has a 300ms delay
        ["touchstart", "click"].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);
        });
    });

    function handleClick(event){
        console.log("handle " + event);
        event.preventDefault(); 
        console.log("passei");
        this.classList.toggle(activeClass);
        outsideClick(this, ["touchstart", "click"], () => {
            this.classList.remove(activeClass);
        });
    }   
}