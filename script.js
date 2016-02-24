
var randomNumber = function(range){
  return Math.floor((Math.random() * 3)+1);
};



divPrintR1 = function(){
  var num1 = document.getElementById("num1");
  num1.innerHTML=randomNumber();

  var num2 = document.getElementById("num2");
  num2.innerHTML = randomNumber();

  var num3 = document.getElementById("num3");
  num3.innerHTML = randomNumber();
}

divPrintR2 = function(){
  var num4 = document.getElementById("num4");
  num4.innerHTML=randomNumber();

  var num5 = document.getElementById("num5");
  num5.innerHTML = randomNumber();

  var num6 = document.getElementById("num6");
  num6.innerHTML = randomNumber();
}
divPrintR3 = function(){
  var num7 = document.getElementById("num7");
  num7.innerHTML=randomNumber();

  var num8 = document.getElementById("num8");
  num8.innerHTML = randomNumber();

  var num9 = document.getElementById("num9");
  num9.innerHTML = randomNumber();
}

console.log (randomNumber());
divPrintR1();
divPrintR2();
divPrintR3();
