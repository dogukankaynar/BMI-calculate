let showUI = (weight,height,ibwDescription,idealWeight)=>{
    let menu = document.getElementById('menu');
    menu.innerHTML = `<div class="reuslt-menu">
    <div class="first-card">
        <div class="values">
            <div>
                <p class="card-title">SEX:</p>
                <p id="sex" class="card-description">MALE</p>
            </div>
            <div>
                <p class="card-title">WEİGHT:</p>
                <p id="weight" class="card-description">${weight}</p>
            </div>
            <div>
                <p class="card-title" >HEİGHT:</p>
                <p id="height" class="card-description">${height}</p>
            </div>
        </div>
        <div class="first-card-title">
            <h1>Your ideal body weight is:</h1>
            <p id="idealWeight" class="weight-description">${idealWeight} KG</p>
            <p id="ibwDescription" class="ıbw-description">${ibwDescription}</p>
        </div>
        <button id="btn" class="card-btn font cl-white">Take the quiz</button>
    </div>
    <div class="second-card">
        <img src="./css/img/card-back.png" alt="">
    </div>
</div>`;

console.log("calıstım");
}

const calculateReruslt =(ıbw,k,b,idealKilo)=>{
    let sex = document.getElementById('sex');
    let weight = document.getElementById('weight');
    let height = document.getElementById('height');
    let ibwDescription = document.getElementById('ibwDescription');
    let idealWeight = document.getElementById('idealWeight');

    
    console.log(ıbw);
    if(ıbw<=18){
        weight=k;
        height=b*100;
        idealWeight=idealKilo;
        ibwDescription="Boyunuza göre uygun ağırlıkta olmadığınızı, zayıf olduğunuzu gösterir. Boyunuza uygun ağırlığa erişmeniz için yeterli ve dengeli beslenmeli, beslenme alışkanlıklarınızı geliştirmeye özen göstermelisiniz."
    }
    else if(ıbw<24){
        weight=k;
        height=b*100;
        idealWeight=idealKilo;
        ibwDescription="Boyunuza göre uygun ağırlıkta olduğunuzu gösterir. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösteriniz."
    }
    else if(ıbw<29){
        weight=k;
        height=b*100;
        idealWeight=idealKilo;
        ibwDescription="Boyunuza göre vücut ağırlığınızın fazla olduğunu gösterir. Fazla kilolu olma durumu gerekli önlemler alınmadığı takdirde pek çok hastalık için risk faktörü olan obeziteye (şişmanlık) yol açar."
    }
    else if(ıbw<34){
        weight=k;
        height=b*100;
        idealWeight=idealKilo;
        ibwDescription="1. Derece Obezite. Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. "
    }
    else if(ıbw<39){
        weight=k;
        height=b*100;
        idealWeight=idealKilo;
        ibwDescription="2. Derece Obezite. Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. "
    }
    else if(ıbw>39){weight=k;
        height=b*100;
        idealWeight=idealKilo;
        ibwDescription="3. Derece Obezite. Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. "
    }
    showUI(weight,height,ibwDescription,idealWeight);
};

export {calculateReruslt}