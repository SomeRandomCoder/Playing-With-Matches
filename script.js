
var randomNumber = function(range){
  return Math.floor((Math.random() * 9)+1);
};



divPrintR1 = function(){
  var num1 = document.getElementById("num1");
  num1.innerHTML=randomNumber();

  var num2 = document.getElementById("num2");
  num2.innerHTML = randomNumber();

  var num3 = document.getElementById("num3");
  num3.innerHTML = randomNumber();
}


console.log (randomNumber());
divPrintR1();
