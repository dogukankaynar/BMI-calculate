import {calculateNow} from "./calculate.js";
import {calculateReruslt} from "./result.js";
let btn=document.getElementById("btn")

function eventListeners(){
    btn.addEventListener("click",calculateNow)
}

calculateReruslt();
eventListeners();