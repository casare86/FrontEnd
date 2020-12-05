//import * as myLib from "./functions.js"; //can be used this way as well

export default function initTabNav(){
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