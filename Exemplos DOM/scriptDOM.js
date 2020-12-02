//JS for DOM element 
//window is the element Window is the constructor
//window.alert("Hello World!"); or just alert("Hello World!");
const title = document.querySelector("h1");//get the first h1 element it finds
title.innerHTML; //returns the text
title.classList; //list of classes
title.id; //id of the element if any
console.log(title.offsetHeight); //return the height of the element

addEventListener("click", function(){
    console.log("You are on " + title.innerHTML + " page.");
})

const language = window.navigator.language;
const innerWindowSize = window.innerWidth;
console.log(`The browser language is ${language} and page width is ${innerWindowSize} px`);