
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
