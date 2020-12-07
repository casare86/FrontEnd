import outsideClick from "./outsideClick.js";

export default function initMenuMobile(){
    const btnMenu = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const events = ['click', 'touchstart'];
    console.log(btnMenu);
    if(btnMenu){
        function openMenu(event) {
            menuList.classList.add(activeClass);
            btnMenu.classList.add(activeClass);
            outsideClick(menuList, ['click', 'touchstart'], () => {
                menuList.classList.remove(activeClass);
                btnMenu.classList.remove(activeClass);
            });
        }
        //events.forEach(event => btnMenu.addEventListener(event, openMenu));
        events.forEach((event) => {
            btnMenu.addEventListener(event, openMenu);
        });
    }
}


