//prevent a global variable creation ex car = "bmw"; without var,let or const it will be treat as global
'use strict'
//variable types:
{
    const trialConst = "can´t change values, survive only in the block";
    var trialVar = "can survive outside the code block";
    let trialLet = "only persist in code blocks";
    console.log(trialVar, trialLet, trialConst);
}
console.log(trialVar, trialLet, trialConst);
//template string usa-se crase ``
var gols;
//ao declarar uma variável em qqr local o JS separa a inicialização para o início
// e sua atribuição de valor para a linha específica
gols = 1000;
//var frase1 = `Romário fez ${gols} ao longo de sua carreira`;
console.log(`Romário fez ${gols} ao longo de sua carreira`);

var casasPotencia = 10e2;
var casasPotenciaNegativa = 10e-2;
console.log(casasPotencia, casasPotenciaNegativa);

//tornar string números
var stringToNumber = '28';
console.log(+stringToNumber);
console.log(-stringToNumber);
console.log(typeof stringToNumber);
console.log(typeof +stringToNumber);
//CASO || - retorna o primeiro verdadeiro que encontrar ou último valor
//CASO && - retorna primeiro falso ou o último verdadeiro
var boolean = (5-5) || (7-7) || (' s' - 5);
console.log(boolean);//NaN pois ' s' - 5 retorna uma falha de conversão para números

//Object
var pessoa = {
    nome: "Fernando Casare",
    idade: 34,
    profissao: "Desenvolvedor Web",
    possuiFaculdade: true,
}
let line = `Me chamo ${pessoa.nome}, tenho ${pessoa.idade} e trabalho como ${pessoa.profissao}`;
console.log(line);

//method
var square = {
    sides: 4,
    area: function(size){
        return size * size;
    },
    //perimeter: function(size)
    perimeter(size){
        return this.sides * size;
    }
}
square.sides; //4
square.area(5); //25
square.perimeter(5) //20

//native objects: Math, console, ...
console.log(Math);
console.log(Math.PI);
console.log(Math.random()); //a number between 0 and 1
console.table(square);

//menu as object
var menu = {
    width: 900,
    height: 90,
    backgroundColor: "#E8D",
}
menu.backgroundColor = '#000'; //set
var bg = menu.backgroundColor; //get
menu.hide = function(){//set
    console.log("hidding menu");
    menu.display = "none"; 
}
console.log(menu);
menu.hide();
console.log(menu);//new property display
//JS uses Object to create a new object and Object has his own properties like:
console.log(menu.hasOwnProperty('height'));
console.log(menu.hasOwnProperty('constructor'));

//boolean, string, numbers etc have properties heritage from his constructor
var name = "Casare";
console.log(name.lenght);
console.log(name.charAt(1)); //charAt turns it to array of chars and return value 'a'
console.log(nome.replace("Ca", "Ka"));

//foreach for arrays
var fruits = ["banana", "apple", "pineapple", "orange"];
fruits.forEach(function(fruit, index, arrayInfo){
    console.log(fruit, index, arrayInto);//each time arrayInfo will print every elements in the array
});

//Const and Let
const date = {
    year: '2020',
    month: "November",
}
date.day = "22";
date.year = "2021";
//const  don´t allow typecast so its used more often 
//let is used to changeble values ex: for(let i =0; i < 10; i++)