//Function
function add (x, y) {
    return x + y; //return number
}
//if the function is created it will be inserted into Window object console.log(Window);

console.log(add(3,2));//5 since it returns a number Number methods can be used
console.log(add.length);//int showing how many parameters it takes, 2 in this case
console.log(add.name.toUpperCase()); //string the name of the function as a string add
 
function getCarInfo (speed) {
    console.log(this);
    console.log(this.brand + " " + this.year + " " + speed);
}
//object not defined so it is defined during the function call
getCarInfo.call({brand: "Honda", year: 2017});

const cars = ["Ford", "Fiat", "BMW"];
cars.forEach.call(cars, (item) => {
    console.log(item);
});
//Constructor 
function Dom(item) {
    this.element = document.querySelector(item);
}
Dom.prototype.activate = function(CSSClass){
    this.element.classList.add(CSSClass);
}
const ul = new Dom("ul");
const liOne = {
    element: document.querySelector("li")
}

ul.activate("active");// add active class in ul tag
//ul.activate.call(li, "active")// li tags will receive the new class 
console.log(ul); 

Dom.prototype.activate.call(liOne, "active");

const fruits = ["Grape", "Apple", "Banana"];
//Sames ways to execute pop in fruits array 
// Array.prototype.pop.call(fruits); 
// frutas.pop();

const li = document.querySelectorAll("li");
const filter = Array.prototype.filter.call(li, (item) => {
    return item.classList.contains("active");
});
console.log(filter);
console.log(li);

const numbers = [10, 20, 33, 42, 1223, 442];
Math.max(numbers);//undefined can´t interact with arrays, only with items
Math.max.apply(numbers); //1223 - will change array into itens and then get the max value

//bind
const car = {
    brand: "Ford",
    year: 2018,
    accelerate: function(speed, time) {
        return `${this.brand} acellerated to ${speed} in ${time} seconds. `
    }
}
const honda = {
    brand: "Honda",
}
const hondaSpeed = car.accelerate.bind(honda);
console.log(hondaSpeed(300, 20));

//bind exemple
function createElement (tag, cssClass, text) {
    const element = document.createElement(tag);
    cssClass ? element.classList.add(cssClass) : null;
    text ? element.innerHTML = text : null;
    return element;
}
console.log(createElement("li", "blue", "Some text"));
//bind(nul) assumes window object
const h1Titles = createElement.bind(null, "h1", "title"); //generate <h1> tags
console.log(h1Titles("This is an Example"));