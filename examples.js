// //JS for FineCars.com
// const carsGridSection = document.getElementsByClassName("gird-section");
// //get only the elements who have both classes
// const contactGridSection = document.getElementsByClassName("gird-section contact");
// //querySelector uses CSS sintaxe to find elements
// const firstUl = document.querySelector("ul");
// const getLi = firstUl.querySelector("li");
// //use ^ to change into a hunger (non restrictive) selector, get anithing starting with #
// const anchorLink = document.querySelector("[href^=\"#");
// //getElementsByClassName or getElementsByTagName return a dinamic array (it changes in real time)
// const images = document.querySelectorAll(".cars img"); //return a nodeElement array - static (don´t change)

// const gridSectionHTML = document.getElementsByClassName("grid-section");//dinamic
// const gridSectionNode = document.querySelectorAll(".grid-section");//static
// //nodelist .lenght, .item(index) , .entries(), forEach(calback, [currentValue, currentIndex, listObj]), keys()(//index values), values()(return the innerHTML of the elements)
// //HTMLColection .length, .item(idx), namedItem(idx)
// firstUl.classList.add("grid-section");

// console.log(gridSectionHTML); //4
// console.log(gridSectionNode);//3

// //foreach
// gridSectionNode.forEach(function(item, index, array){
//     console.log(`Object: [${index}] `  + item  );
//     console.log(array);
// });

// const arrayGrid = Array.from(gridSectionHTML);//change to static array;
// arrayGrid.forEach(function(item){
//     console.log(item);
// });
// //another foreach
// const imgs = document.querySelectorAll("img");
// imgs.forEach(function(item, index, array){
//     console.log(item, index, array);
// });

// //arrow Function can replace the word function
// //if there is no parameters 
// imgs.forEach(item =>{
//     console.log("Works as well");
//     console.log("Taking no arguments: forEach(()=>{})")
// });
// let i = 0;
// imgs.forEach((item) => console.log(i++) );
// //getting all <p> in a page
// const paraghaphs2 = document.querySelectorAll("p");
// //or
// const paraghaphs = document.getElementsByTagName("P");
// const pArray = Array.from(paraghaphs);
// pArray.forEach((item, index) =>{
//     console.log(item);
//     console.log("Paragraph " + index + " " + item.innerHTML);
// }); 

// //classList
// const menu = document.querySelector(".menu");
// menu.className; //string
// menu.classList; //list
// menu.classList.add("class1", "classN");
// menu.classList.remove("classX");
// menu.classList.toggle("active");//add or remove class
// menu.classList.contains("active");//true or false
// menu.classList.replace("active", "inactive"); 
// console.log(menu.attributes);
// console.log(menu.attributes[0]);
// console.log(menu.attributes.id);
// console.log(menu.attributes["data-text"]);
// const img1 = document.querySelector('img');
// img1.getAttribute("src"); //src value
// img1.hasAttribute("alt"); //true or false
// img1.setAttribute("alt", "A fine car image");//add and sets nalt atrtribute
// img1.removeAttribute("alt");

// //measures from elements
// window.innerWidth; //internal value of the screen
// window.innerHeight;
// window.pageYOffset;//how far the scroll bar went
// //const small = window.matchMedia("(max-width: 600px)"); //same as @media max value: 600px
// const small = window.matchMedia("(max-width: 600px)").matches;
// if(small)
//     console.log("Screen smaller then 600px");
// else
//     console.log("Screen smaller then 600px");

// //Event and callback functions
// const img = document.querySelector('img');
// function callback(event){
//     console.log(event);
//     console.log(event.currentTarget); //generic element
//     console.log(event.target); //exactly where you clicked
//     console.log(event.type);
//     console.log(event.preventEventDefault());//prevent action like links to open
// }
//  //calls the function passing the element you clicked
// img.addEventListener("click", callback);

// function handleKeyboard(e){
//     if(e.key == "f")
//         document.body.classList.toggle(".fullscreen");
// }
// window.addEventListener("keydown", handleKeyboard);

// //add/remove active class
// const anchorLinks = document.querySelectorAll("a[href^='#'");

// function handleActiveLink(event) {
//     event.preventDefault();
//     anchorLinks.forEach((link) => { 
//          link.classList.remove("active");
//     });
//     event.currentTarget.classList.add("active");
// }
// //anchorLinks.forEach(function(link){})
// anchorLinks.forEach((link) => {
//     link.addEventListener("click", handleActiveLink);
// });
// //* function as a generic selector in CSS
// const allElements = document.querySelectorAll("*");
// console.log(allElements);

// //enlarge text
// function handleClickT (event){
//     console.log(event.key);
//     if (event.key === "t")
//         document.documentElement.classList.toggle("enhanceText");
//     else if (event.key === "u") //insertBefore(element, position);
//         contact.insertBefore(cars, title);
// }
// document.addEventListener("keydown", handleClickT);

// const cars = document.querySelector(".cars");
// const contact = document.querySelector(".contact");
// const title = contact.querySelector(".title");

// const faq = document.querySelector("#faq h1");
// const cloneFaq = faq.cloneNode(true);
// cloneFaq.classList.add("clone");
// title.appendChild(cloneFaq);

// JS Objects
//Constructor Fucntions - Wrong way
// const car = { 
//     brand: "brands",
//     price: 0,
// }

// const honda = car;
// honda.brand = "Honda";
// honda.price = 10000;
// const fiat = car;
// fiat.brand = "Fiat";
// fiat.price = 2000;
//just reuse the pointers so car will be overrite1

//Constructor Fucntions - Correct Way
function Car(model, price){
    this.model = model;
    this.price = price;
}

const honda = new Car("Honda", 2000); 
//honda = {}
//honda.prototype = Car.prototype;
//gives honda the attributes model and price
//return honda
