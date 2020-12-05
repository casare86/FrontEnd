// // const Dom = {
// //     seletor: "li",
// //     element() {
// //         return document.querySelector(this.seletor);
// //     },
// //     ativar() {
// //         //const elementoSelecionado = document.querySelector(this.seletor);
// //         this.element().classList.add("ativar");
// //     } 
// // }

// function Dom(seletor) {
//     this.element = function() {
//         return document.querySelector(seletor);
//     },
//     this.ativar = function(cssClass) {
//         this.element().classList.add(cssClass);
//     } 
// }

// const li = new Dom("li");
// const lastLi = new Dom("li:last-child");
// const ul = new Dom("ul");
// li.ativar();
// lastLi.ativar("ativo");

// function Pessoa (nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//     this.andar = function() {
//         console.log(this.nome + " andou.");
//     }
// }

// const joao = new Pessoa("João", 20);
// const maria = new Pessoa("Maria", 25);
// const jose = new Pessoa("José", 20);

// function Dom(seletor) {
//     const elementList = document.querySelectorAll(seletor);
//     this.elements = elementList;
//     this.addClass = function(cssClass){
//         elementList.forEach((element) =>{
//             element.classList.add(cssClass);
//         });
//     };
//     this.removeClass = function(cssClass){
//         elementList.forEach((element) =>{
//             element.classList.remove(cssClass);
//         });
//     };
// }

//prototypes
// function Pessoa() {
//     this.nome = nome;
//     this = idade;
//     //if there is a method defined inside the class it uses it, else uses the proto from prototype
//     this.andar = function(){ //instantiated each time a new Pessoa() is used
//         return this.nome + " andou. (objeto)";
//     }
// }
// //creates the method  into the class
// Pessoa.prototype.andar = function(){
//     return this.nome + " andou.";
// }
// const casare = new Pessoa("Casare", 34);
// console.log(Pessoa.prototype);
// console.log(casare.prototype);

// const listaAnimais = ["Cão", "gato", "Cavalo"];
// const lista = document.querySelectorAll("li");//return nodelist
// const listaArray = Array.prototype.slice.call(lista);//array
// const listaArray2 = Array.from(lista);//array

// const Carro = {
//     marca: "Ford",
//     preco: 2000,
//     andar() {
//         return true;
//     }
// }
// console.log(Carro);
// console.log(typeof(Carro));
// Carro.marca.toUpperCase();
// Carro.preco.toFixed(3);
// console.log(String.prototype);//methodos e propriedades do construtor obteto

// function Pessoa(nome, sobrenome, idade) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
// }
// Pessoa.prototype.nomeCompleto = function() {
//     return `${this.nome} ${this.sobrenome}`;
// }
// const fernando = new Pessoa("Fernando", "Casare", 34);

// console.log(NodeList.prototype);
// console.log(Object.getOwnPropertyNames(NodeList.prototype));
// console.log(HTMLCollection.prototype);
// Object.getOwnPropertyNames(Document.prototype);

// const li = document.querySelector("li");
// console.log(li.constructor.name);//o retorno é uma string com a definição do que é o item
// console.log(li.click.constructor.name); //function
// console.log(li.innerText.constructor.name); //string
// console.log(li.value.constructor.name);//number
// console.log(li.hidden.constructor.name);//boolean
// console.log(li.offsetLeft.constructor.name); //number
// console.log(li.click()); //(valor null) return undefined

// //verificar existência de métodos 
// console.log(typeof Array.from !== "undefined");

// //métodos STRING
// const fruta = "Banana";
// const listaFrutas = "Melancia, Banana, Melão";
// //str.includes(search, position) -- search é a needle, position=> index
// listaFrutas.includes(fruta);//true
// fruta.includes(listaFrutas);//false
// fruta.startsWith("Ba");
// fruta.startsWith("ba");
// fruta.endsWith("nana");
// console.log(fruta.slice(2)); //corta os 3 primeiros caracteres
// console.log(fruta.slice(0, 2));//retorna os 3 primeiros
// console.log(fruta.slice(0, -2)); //retorna até o penúltimo caracter
// console.log(fruta.slice(-2));//pga os 2 últimos caracteres
// console.log(fruta.indexOf("a"));
// console.log(fruta.indexOf("A"));
// console.log(fruta.lastIndexOf("na"));
// console.log(fruta.padStart(20, "."));
// console.log(fruta.padEnd(20, "_._"));//preenche o valor até atingir o numero de casas
// console.log(fruta.repeat(3));//repete n vezes a string
// //str.replace(reggex|substr, newstr|function)

// //regex de espaços por -
// console.log(listaFrutas.replace(/[ ]+/g, "-"));
// //substitui o primeiro só
// console.log(listaFrutas.replace(" ", "______"));

// //str.split();

// console.log(fruta.split("n"));
// console.log(fruta.split());//torna a string um array
// console.log(fruta.split(""));//retorna todos os chars em array

// //join
// const htmlText = "<div> O melhor item </div><div> Teste Join JS </div>";
// const htmlArray = htmlText.split("div");
// const novoHtml = htmlArray.join("section"); //troca as div por section no htmlText
 
const person = new Object({
    name: "Fernando"
});
const car = {
    brand: "Model",
    wheels: 4,
    //methods
    init(value){ //constructor
        this.brand = value;
        return this;
    },
    acelerate(){
        return this.brand + " acellerates";
    },
    honk(){
        return this.brand + "honks";
    }
}
const honda = Object.create(car).init("Honda"); 
//honda.brand = "Honda";
console.log(honda.acelerate());

//using generic methods (heritage like)
const functionVehicles = {
    break() {
        return "Activating breaks";
    },
    fuel(){
        return "Fuel is empty";
    }
}

const bike = {
    helmet: true,
}
Object.assign(bike, functionVehicles);
Object.assign(car, functionVehicles);
console.log(bike.fuel());
console.log(car.break());

//defining Properties
Object.defineProperties(bike, {
    helmet:{
        value: true, //if using get/set can´t use value
        configurable: false, //prevent deletion of attribute
        writable: true, //value can be changed
        enumerable: true, //torna enum
    }
});
delete bike.wheels; //wont work since its not condigurable

//get and set
Object.defineProperties(bike, {
    wheels:{
        get: function(){ //get(){}
            return this._wheels;
        },
        set(value){
            this._wheels = value * 4;
        }
    }
});

Object.getOwnPropertyNames(Array)
Object.getOwnPropertyNames(Array.prototype); 

//Object.method //only exibit if the property os enumerable: true
console.log(Object.keys(bike)); //properties
console.log(Object.values(bike)); //properties values
console.log(Object.entries(bike)); //object structure
console.log(Object.getOwnPropertyNames(Array));//get enumerable: false as well

Object.is(honda, car); //use pointers as reference so even an object with same attributes will be false unless they have the same address
Object.freeze(honda); //make the object static
Object.seal(honda); //prevend new properties/delete but allow value changes
Object.preventExtensions(honda);//wont allow new propertis but can be deletec
console.log(Object.isFrozen(honda));
console.log(Object.isExtensible(honda));//if seald false
console.log(Object.isSealed(car));
//hasOwnProperty check if the property is from the object or from prototype
console.log(car.hasOwnProperty('honk'));
console.log(car.hasOwnProperty('map'));
const fruits = ['Banana', 'Straberry']
//fruits receive a protpotype of array
console.log(Array.prototype.isPrototypeOf(fruits));

//checking the object type using toString
Object.prototype.toString.call(fruits);

