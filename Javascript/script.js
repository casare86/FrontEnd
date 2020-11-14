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

//CASO || - retorna o primeiro verdadeiro que encontrar ou último valor
//CASO && - retorna primeiro falso ou o último verdadeiro
var boolean = (5-5) || (7-7) || (' s' - 5);
console.log(boolean);