export default function outsideClick(element, events, callback){
    const html = document.documentElement;
    const outside = 'data-outside';
    console.log(element);
    if(!element.hasAttribute(outside)){
        events.forEach(userEvent => {
            /* 
             * Use the setTimeout function so when click somewhere it runs the bubble function first
             * and finally add the eventListner. This will prevent EventListener triggering prematurely
             */
            setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
        })
        element.setAttribute(outside, '');
    }
    function handleOutsideClick(event){
        if(!element.contains(event.target)){ //check if the click is outside
            element.removeAttribute(outside);
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);    
            });
            callback();//triggers a response inside oustsideClick
        }
    }
}