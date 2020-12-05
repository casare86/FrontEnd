export default function initModal() {
    const btnOpen = document.querySelector('[data-modal="open"');
    const btnClose = document.querySelector('[data-modal="close"');
    const modalContainer = document.querySelector('[data-modal="container"');

    if(btnOpen && btnClose && modalContainer){
        function openModal(event){
            event.preventDefault(); 
            modalContainer.classList.add(activeClass);
        }
        function closeModal(event){
            event.preventDefault(); 
            modalContainer.classList.remove(activeClass);
        }
        function escapeModal(event) {
            if(event.target === this)
                closeModal(event);
        }
        btnOpen.addEventListener("click", openModal);
        btnClose.addEventListener("click", closeModal);
        modalContainer.addEventListener("click", escapeModal);
    }
}
