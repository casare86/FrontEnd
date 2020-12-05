//Arrays
const obj = {
    0: "Fernando",
    1: "André",
    2: "Lucas",
    lenght: 3,
}
//necessida da propriedade lenght para poder converter em array
const objArray = Array.from(obj); 
Array.of(10); //array com 1 item 10
Array[10]; //array com 10 casas

const idades = [10, 20, 22, 35, 33, 8, 5];
idades.sort(); //ordena pelo 1 caracter
console.log(idades);

idades.unshift(2, 4); //add ao inicio
idades.push(12, 36); //add ao final do array
const novaArray = idades.push(2);// retorna a length total do array (int)
idades.shift(); //remove primeiro
idades.pop();//remove ultimo
idades.reverse();//inverte a ordem
/* splice(index, remove, item1, item2...)
 * index é onde começa a inserir 0 - no inicio 1 na segunda posição etc
 * remove = quantos itens serão removidos 0 a N
 * itemN = são os itens adicionados
*/
//idades.copyWithin(alvo, inicio, fim)
//copia o 
const arrayItem = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item2"];
console.log(arrayItem.copyWithin(0,0,0));
console.log(arrayItem.copyWithin(2,0,2));
console.log(arrayItem.copyWithin(-1));
console.log(arrayItem.fill('Nope', 2));
const array2 = ["item 6", "Item N"];
arrayItem.concat(array2);//adiciona um array ao outro, como um push
[].concat(arrayItem, array2);

//includes verifica se há no array
arrayItem.includes("Item2");
arrayItem.indexOf("Item2");//1
arrayItem.lastIndexOf("Item2");//5

//join -> transforma array em string
let htmlString = "<h2> Titulo 2 </h2>";
htmlString = htmlString.split("h2"); //decompoe em array
//htmlString.join()//default é juntar com .
//htmlString.join(""); //junta sem espaços e nem virgulas
htmlString.join("p");

const li = document.querySelectorAll('li');
const retornoForeach = li.forEach((item, index) => {
    item.classList.add("ativa" + index)
});//retorna apenas undefined
//.map() -> retorna um array para dentro da variável, mas dpenderá de um return na construção
console.log(retornoForeach);//undefined
const carros = ["Ford", "Fiat", "Honda"];
const newCarros = carros.map((item, index, array) => {
    console.log(item.toUpperCase(), index, array);
    return item.toUpperCase(); //sem a definição retorna um array de undefined
})
console.log(carros, newCarros);
const numeros = [2, ,3, 4, 5];
const numerosX3 = numeros.map(n => n * 3); //map((n) => { return n * 3 })

const aulas = [ //array de objetos
    {
        nome: "HTML5",
        min: 30
    },
    {
        nome: "CSS3",
        min: 15
    },
    {
        nome: "JS",
        min: 10
    },
    {
        nome: "PHP",
        min: 20
    },
];
const tempoAulas = aulas.map(aula => aula.min); //array com os tempos
let totalAulas = 0;
aulas.forEach((aula) => {
    totalAulas += +aula.min;
});
console.log(totalAulas);

//reduce - iteração de arrays
const reduceAulas = tempoAulas.reduce((prevItem, item, index, array) => {
    console.log(prevItem, item, index, array);
    return prevItem + item;//build up
//}, 0); //100 é o acumulador inicial (prevItem)
}); //sem retorno ele simplesmente pega a partir o index 1
//pegar o maior número do array
const maiorTempoAula = tempoAulas.reduce((anterior, atual) =>{
    return (anterior > atual) ? anterior : atual;
}, 0);
//const maiorTempoAula = tempoAulas.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0)
console.log("Maior tempo de aula = " + maiorTempoAula);
//reduceRight é igual, mas de trás pra frente
const listaAulas = aulas.reduce((prev, aula, index) =>{
    console.log(aula.nome);
    prev[index] = aula.nome;
    return prev; 
}, {}); //{} inicial é um objeto vazio
console.log(`A lista de aulas é : ${listaAulas}`);
console.log(listaAulas); 

const frutas = ["Banana", "Pera", "Uva"];
const temUva = frutas.some((item) => {
    console.log(item);
    return item === 'Uva'; //if (item == Uva) //precisa ter um return se não considera tudo false
});
console.log(temUva);
//numeros tem 2 no array
let numeroMaiorX = numeros.every((n) => {//itera até o primeiro valor falso
    console.log(n);
    return n > 3;
});
console.log("every: " + numeroMaiorX);
numeroMaiorX = numeros.findIndex(item => {
    return item === 2;
});
console.log("find index: " + numeroMaiorX);
numeroMaiorX = numeros.find(item => {
    return item === 2;
});
console.log("find: " + numeroMaiorX);

//filter -> return os valores true;
const frutas1 = ["Banana", null, "Pera", "", "Maça", undefined, 0 ];
const arrayFrutas1 = frutas1.filter(fruta =>{
    return fruta;
});
console.log(arrayFrutas1);