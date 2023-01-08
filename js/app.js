let ibw = document.getElementById("ıbw");
let count = 0;






let showContentMenu = ()=>{
    count++;
    let img = document.getElementById("contentİmg");
    if(count%2==1){
        img.src="./css/img/up.png";
        ibw.innerHTML+=`<div class="menu-main">
        <div class="menu-footer footer-text">
          <p>
            Ideal body weight (IBW) is the weight believed to have the maximum health potential and the lowest risk of mortality for that person.
          </p>
        </div>
        <div class="menu-description">
          <p class="footer-text" style="width:794px;">
            Even though there is a formula for calculating ideal body weight, there are still additional variables such as:
         </p> 
       </div>
       <div class="menu-list footer-text">
         <ul>
           <li>Gender</li>
           <li>Age</li>
           <li>Current healt</li>
           <li>Muscle-fat ratio</li>
           <li>Body-fat distribution</li>
           <li>Body Shape</li>
           <li>Body frame size</li>
         </ul>
       </div>
        <div class="menu-footer footer-text">
         <p>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
           reiciendis.
         </p>
       </div>
      </div>
    </div>`
    }
    if(count%2==0){
        ibw.innerHTML=`  <div class="menu-space-arround">
        <h1 class="content-title">What is IBW?</h1>
        <img  id="contentİmg" src="./css/img/down.png" alt="">
      </div>`
    }
}

function eventListeners(){
    ıbw.addEventListener("click",showContentMenu)
}


eventListeners();