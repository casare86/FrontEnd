const contact = document.querySelector("#contact");
const text = document.querySelector(".text");
console.log("teste");
const data = {};//an Object
function handleChange(event) {
    data[event.target.name] = event.target.value; //set data.name = "Name inputed"; data.email = "emailinputed.com"
    const target = event.target;
    if(target === contact.color)
        document.body.style.backgroundColor = event.target.value;
    console.log(target);
    console.log(contact.color);
    if(!target.checkValidity()) {
        target.classList.add("invalid");
        contact.name.setCustomValidity("This field is very important");//changes only for name, leaving the others as default
        //target.setCustomValidity("Este campo deve ser preenchido");//override every validationMessage to this one
        target.nextElementSibling.innerText = target.validationMessage;
        
    }
    console.log(event.target.checkValidity());
    console.log(event.target.value);
    text.innerHTML = event.target.value;
}

contact.addEventListener("change", handleChange);