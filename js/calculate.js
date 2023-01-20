import {calculateReruslt} from "./result.js";

const calculateNow = () => {
    let k = document.getElementById("weight").value;
    let b = document.getElementById("height").value/100;
    let ıbw = Math.round(k/ (b*b));
    calculateReruslt(ıbw)
};

export {calculateNow}
