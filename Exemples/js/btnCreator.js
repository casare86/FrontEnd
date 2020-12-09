const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector('.btn');

console.log("Oi");
controles.addEventListener('change', handleChange);

function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    handleStyle[name](value);
    saveValues(name, value);//envia para armazenamento local
    console.log(name, value);
    showCss();
}

const handleStyle = {
    element: btn,
    texto(value){
        this.element.innerText = value;
    },
    backgroundColor(value){
        this.element.style.backgroundColor = value;
    },
    height(value){
        this.element.style.height = value + 'px';
    },
    width(value){
        this.element.style.width = value + 'px';
    },
    color(value){
        this.element.style.color = value;
    },
    border(value){
        this.element.style.border = value;
    },
    borderRadius(value){
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value){
        this.element.style.fontFamily = value;
    },
    fontSize(value){
        this.element.style.fontSize = value + 'rem';
    }
}

function showCss(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><br><span>');
    console.log( cssText.innerHTML);
}
//armazenamento local na máquina do usuário via browser
// localStorage.nome = "Fernando"; 
// console.log(localStorage.nome)

function saveValues(name, value) {
    localStorage[name] = value;
}
//cuidado ao recuperar valores, pois se houver outras chaves salvas pode dar conflito na hora de recuperar as infos
//por ex: a chave criada nome: Fernando não faz parte do objeto handleStyle e pode causar falha no JS ao tentar ser processada
function setValues() {
    const properties = Object.keys(localStorage);
    properties.forEach(property => {
        console.log(property);
        handleStyle[property](localStorage[property]);
        controles.elements[property].value = localStorage[property];
       
    });
    showCss();
}

setValues();