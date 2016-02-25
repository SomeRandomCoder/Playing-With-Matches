
var randomNumber = function(range){
  return Math.floor((Math.random() * 3)+1);
};

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var num9 = document.getElementById("num9");
var numbers = document.querySelector("number")

divPrintR1 = function(){

  num1.innerHTML = randomNumber();
  num2.innerHTML = randomNumber();
  num3.innerHTML = randomNumber();
}

divPrintR2 = function(){

  num4.innerHTML=randomNumber();
  num5.innerHTML = randomNumber();
  num6.innerHTML = randomNumber();
}
divPrintR3 = function(){

  num7.innerHTML = randomNumber();
  num8.innerHTML = randomNumber();
  num9.innerHTML = randomNumber();
}

console.log (randomNumber());
divPrintR1();
divPrintR2();
divPrintR3();
// num1.classList.add('highLight');
// num2.classList.add('highLight');
// num3.classList.add('highLight');
// num4.classList.add('highLight');
// num5.classList.add('highLight');
// num6.classList.add('highLight');
// num7.classList.add('highLight');
// num8.classList.add('highLight');
// num9.classList.add('highLight');

function highLight(){
  var displayMessage = document.getElementById("displayMessage");
if (num1.innerHTML === num2.innerHTML){
num1.classList.add("highLight");
num2.classList.add("highLight");
displayMessage.innerHTML = "Number 1 and Number 2 match!";
}

if(num1.innerHTML === num3.innerHTML){
  num1.classList.add("highLight");
  num3.classList.add("highLight");
  displayMessage.innerHTML ="Number 1 and Number 3 match!";
}

if(num2.innerHTML === num3.innerHTML){
  num2.classList.add("highLight");
  num3.classList.add("highLight");
  displayMessage.innerHTML = "Number 2 and Number 3 match!";
}
if (num1.innerHTML===num2.innerHTML && num1.innerHTML===num3.innerHTML && num2.innerHTML===num3.innerHTML){
  num1.classList.add("highLight");
  num2.classList.add("highLight");
  num3.classList.add("highLight");
  displayMessage.innerHTML = "Number 1, Number 2 and Number 3 matches!";
}
if(num1.innerHTML === num4.innerHTML){
  num1.classList.add("highLight");
  num4.classList.add("highLight");
  displayMessage.innerHTML ="Number 1 and Number 4 matches!";
}

};



highLight();
displayMessage();
