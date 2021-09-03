let calcBtn=document.querySelector("#calcBtn");
let resetBtn=document.querySelector("#resetBtn");
let ageInput=document.querySelector("#ageInput");
let result=document.querySelector("#result");
let refresh=document.querySelector(".refresh");
let age;
let timer;
calcBtn.addEventListener("click",function(){
     age=ageInput.value.trim();
    if(age =="")
    {
        let alert=document.querySelector(".alert");
        alert.classList.add('active');
    
    timer=setInterval(function(){
        alert.classList.remove('active');

    },3000)
    } 
     else if(isNaN(age) == true){
      
        let alert1=document.querySelector(".alert1");
        alert1.classList.add('active');


        timer=setInterval(function(){
            alert1.classList.remove('active');
        },3000)
    }
    else{
        let answer = document.querySelector(".answer")
        answer.classList.add('active');
        let years=90-age;
        let weeks=years*52;
        result.innerHTML=weeks;
        ageInput.value="";
    }
    resetBtn.addEventListener("click",function(){
        refresh.click();
    })

  

});