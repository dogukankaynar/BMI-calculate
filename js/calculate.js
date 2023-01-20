const calculateNow = () => {
    let k = document.getElementById("weight").value;
    let b = document.getElementById("height").value/100;
    let ıbw = Math.round(k/ (b*b));
    console.log(ıbw);
};

export {calculateNow}
