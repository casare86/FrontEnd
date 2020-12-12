// //fetch needs a server because it uses HTTP requests
// const doc = fetch('./doc.txt'); //return an Object response
// console.log(doc);

// // doc.then(resolve => {
// //     console.log(resolve.text());
// //     resolve.text()
// //     .then((body) =>{
// //         console.log(body);
// //     })
// // });
// doc
// .then(r => r.text())
// .then(body => {
//     const content = document.querySelector('.content');
//     content.innerHTML = body;
// });
// console.log("json");
// //USING Fetch within JSON
// const zipCode = fetch('https://viacep.com.br/ws/01001000/json/');
// zipCode.then(r => r.json())
// .then(body => {
//     const zipContent = document.getElementById('zipCode');
//     zipContent.innerHTML = body.logradouro;
//     zipContent.innerHTML += "<br>" +  body.bairro + ' - ' + body.localidade;
// });
// console.log("Clone");
// //clone response
// //when using then and body the object is transofrmed so you can´t transform it again
// //thas why we use clone if we want to manipulate the response object
// const zipCode2 = fetch('https://viacep.com.br/ws/01001000/json/');
// zipCode2.then(r => {
//     const r2 = r.clone();
//     r.text().then(text => console.log(text));
//     r2.json().then(json => console.log(json));
// });
// console.log("Headers");
// //headers
// const zipCode3 = fetch('https://viacep.com.br/ws/01001000/json/');
// zipCode2.then(r => {
//     console.log(r.status);
//     console.log(r.type); //basic inside request, cors - to another server (with permission (APIs))
//     console.log(r.url);
//     if(r.status === 404)
//         console.log("Page not found or don´t exists");
//    console.log("headers: " + r);
//    r.headers.forEach(console.log);
// });


// //FILES - can´t fetch @import files
// console.log("Files");
// const css = fetch('../css/modal.css');
// css.then(r => r.text())
// .then(body => {
//     const cssText = document.querySelector('.cssContent');
//     const style = document.createElement('style');
//     style.innerHTML = body;
//     console.log(style);
//     cssText.innerText = body;
//     cssText.appendChild(style);
// });

// console.log("HTML INFO");
// const pullPage = fetch('./joinUs.html');
// const div = document.createElement('div');
// pullPage.then( r => r.text())
// .then(body => {
//     div.innerHTML = body;
//     const title = div.querySelector('h1');
//     const newPost = document.querySelector('.newPosts');
//     newPost.appendChild(title);
//     console.log(title);
// });

// //BLOB when JS can´t handle the archive its retrieve you can use blob to generate an URL
// const img = fetch('./map.png');

// img.then(r => r.blob())
// .then(body => {
//     console.log(body);//infos about size and dimension
//     const blobUrl = URL.createObjectURL(body);
//     console.log(blobUrl);
//     const imgDom = document.querySelector('img'); 
//     imgDom.src = blobUrl;
// });

//ASYNC AND AWAIT - es8 (2017)
console.log("async and await JS ");
async function getData(){
    try 
    {
        const responseData = await  fetch('./dados.json');
        //without await the fetch wont have time to be solved resulting in: Promise {<pending>}
        console.log(responseData);
        const jsonData = await responseData.json();
        console.log(jsonData);
    }
    catch (err)
    {
        console.log(err);
    }
}
getData();

async function getData2(){
    const promiseDados = fetch('./dados.json');
    const promiseClient = fetch('./dados.json');
    
    const jsonDados = await (await promiseDados).json();
    //const jsonData = await jsonDados.json();
    console.log(jsonDados);
}
console.log("data 2");
getData2();