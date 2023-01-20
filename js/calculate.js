import {calculateReruslt} from "./result.js";

const calculateNow = () => {
    let k = document.getElementById("weight").value;
    let b = document.getElementById("height").value/100;
    let bInch = document.getElementById("height").value;
    let ıbw = Math.round(k/ (b*b));
    let idealKilo= Math.round(50 + 2.3 * ((bInch/2.54)-60));
    
    //tüm alanları doldurması için kontrol yapıldı
    k==""||b==""?alert("TÜM ALANLARI DOLDURUNUZ"):calculateReruslt(ıbw,k,b,idealKilo)
};

export {calculateNow}
