fetch('./dados.json')
.then(r => r.json())
.then(json => {
    console.log(json);
    console.log(json[0].aula);
    json.forEach(materia => {
        console.log(`Aula: ${materia.aula} duração ${materia.tempo}.`);
    })
});

//parse -> separa uma string do tipo JSON para um Object JS
//stringfy -> Object para string JSON
fetch('./dados.json')
.then(r => r.text())
.then(jsonText => {
    console.log(jsonText);
    const jsonFinal = JSON.parse(jsonText);
    console.log(jsonFinal);
});

const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript",
    concluida: false,
    usuario: null
}
const stringConfig = JSON.stringify(configuracoes);
setTimeout(function(){console.log(stringConfig)}, 1000);

localStorage.config = JSON.stringify(configuracoes); //insere um json no localstorage
console.log(localStorage.config);//string apenas
console.log(JSON.parse(localStorage.config));//retorna um objeto a partir do json




