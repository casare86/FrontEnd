//const promess = new Promise(function(resolve, reject) {
const promess = new Promise((resolve, reject)  => {
    let condition = false;
    if(condition)
        setTimeout(()=>{
            resolve({name: "Fernando", age: 34});
        }, 1000)
    else 
        reject(Error("Promise Failed"));

});
//Promise has then() in its prototype witch is activated when promise is resolved (condition true)
const promessReturn = promess.then( r => console.log(r),
err => console.log(err)); //works as .catch 

console.log(promessReturn);
//can´t have a promess thowing a reject without treatment

const cascadePromess = promess
.then((r) => {
    console.log("Return changing");
    r.work = "Software Engineer";
    return "Trial 1"
})
.then(r => {
    console.log(r);
})
.catch(err => {
    err += " twice."
    console.log(err);
});

const login = new Promise((resolve) => {
    setTimeout(() =>{
        resolve("User logged in")
    }, 1000)
});
const data = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data loaded")
    }, 1500);
});

//verify if all promises was concluded
const allLoaded = Promise.all([login, data]); 
allLoaded.then(res => console.log(res));//Array

const firstPromise = Promise.race([login, data]);
firstPromise.then(res => console.log(res));