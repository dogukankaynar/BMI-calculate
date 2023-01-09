import {calculateNow} from "./calculate.js";
let btn=document.getElementById("btn")

function eventListeners(){
    btn.addEventListener("click",calculateNow)
  }
  

eventListeners();