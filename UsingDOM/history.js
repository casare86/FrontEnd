//console.log(window.history);
//Object, title, url 
//window.history.pushState(null, null, 'justaURLMask.html');//just changes the url do not open neither try to access it.
//window.history.pushState(null, null, 'about.html');
//popstate only works tandem with pushState so you will need to use both

function handleClick(event){
    event.preventDefault();
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url){
    document.querySelector('.content').innerHTML = 'Loading...'
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    replaceContent(pageText);
}

function replaceContent(newText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;
    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content');
    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector('title').innerText;
}
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', handleClick);
});

window.addEventListener('popstate', () => {
    console.log(window.location.pathname); //same as window.location.href
    fetchPage(window.location.href);
})