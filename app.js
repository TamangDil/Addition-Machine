const result = document.getElementById('results');
const ip1 = document.getElementById('ip1');
const ip2 = document.getElementById('ip2');
const calc = document.getElementById('calc');
const rand = document.getElementById('rand');
const clr = document.getElementById('clr');

//EVENT LISTENER FOR THE CALC BUTTON

calc.addEventListener('click',function(){
    // CREATED TWO NEW VARIABLES THAT USE PARSEFLOAT TO CONVERT A STRING TO A NUMBER 
    const firstNum= parseFloat(ip1.value);
    const secondNum = parseFloat(ip2.value);
    //SETS THE INNER HTML TO THE SUM OF THE TWO INPUTS
    result.innerHTML =firstNum+secondNum;
   
   });


//EVENT LISTENER FOR CLEAR BUTTON
clr.addEventListener('click',function(){
    ip1.value='';
    ip2.value='';
    result.innerHTML='';

});


//A FUNTION THAT GENERATES A RANDOM NUMBER BETWEEN 0 AND 1000

function randomNumberGenerator(){
    return Math.floor(Math.random()*1000);

}

console.log(randomNumberGenerator());