
//number 
console.log(Number.isNaN(4));//true
console.log(Number.isNaN("casa"));//false
Number.isInteger(2);//true
Number.parseFloat('200 Reais'); //200 //trunca virgula ","
Number.parseFloat("R$ 200"); //retorna NaN pois há char no início
Number.parseInt("200", 10); // valor, para base 10 (decimal)
let preco = 10.49;
console.log(+preco.toFixed())//toFixed() retorna truncado como int e para string, por isso o +
console.log(preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

//Math
Math.abs(-55);
Math.ceil(4.8);
Math.floor(4.9);
Math.round(4.5);
const numeros = '4,5,10,14,20';
const arrayNumeros= numeros.split(', ');
Math.max(4,5,10,14,20);
Math.min(...arrayNumeros); //... transforma como se fossem todos os argumentos do array array[0], ...array[n]
Math.random();//algo entre 0.00 e 0.999.. nunca o 1
//num 20 a 40
console.log(Math.floor(Math.random() * (40 - 20 + 1) + 20));