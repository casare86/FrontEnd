//Dom Manipulation
const h1 = document.querySelector('h1');
console.log(Object.prototype.toString.call(h1));//HTMLHeadingElement
//inherit ptototypes from: HTMLHeadingElement, HTMLElement, Element, Node, EventTarget, Object
console.log(h1.dataset);
const div = document.querySelector('[data-color]');
console.log(div.dataset.color);
//data properties automatically changes from snake-case to camelCase and vice versa
console.log(div.dataset.animeteScroll);
