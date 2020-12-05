import initSmoothScroll from './Modules/scroll-smooth.js';
import initAnimateScroll from './Modules/scroll-animation.js';
import initAccordion from "./Modules/accordion.js";
import initTabNav from "./Modules/tabnav.js";
//cant have a export default in functions if you wanna call just one function
//import { test as newName } from "./Modules/functions.js";
//import { test } from "./Modules/functions.js";
import * as myLib from "./Modules/functions.js";
import initModal from "./Modules/modal.js";

//console.log(myLib.test(), myLib.test2()); //undefined undefined since these functions dont have a return
myLib.test();
myLib.test2();
console.log(myLib.permitAccess, myLib.someInfo);
initModal();



initSmoothScroll();
initAnimateScroll();
initAccordion();
initTabNav();




