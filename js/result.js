const calculateReruslt =(ıbw)=>{
    console.log(ıbw);
    if(ıbw<=18){console.log("zayıfsın");}
    else if(ıbw<24){console.log("ideal");}
    else if(ıbw<29){console.log("kilolu");}
    else if(ıbw<34){console.log("1. derece obezite");}
    else if(ıbw<39){console.log("2. derece obezite");}
    else if(ıbw>39){console.log("3. derece obezite");}
};

export {calculateReruslt}