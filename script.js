
var randomNumber = function(){
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

var row1=document.getElementById("row1");
var row2=document.getElementById("row2");
var row3=document.getElementById("row3");
var col1=document.getElementsByClassName("col1");
var col2=document.getElementsByClassName("col2");
var col3=document.getElementsByClassName("col3");

var numX= function(){



  num1.innerHTML = randomNumber();
  num2.innerHTML = randomNumber();
  num3.innerHTML = randomNumber();
  num4.innerHTML = randomNumber();
  num5.innerHTML = randomNumber();
  num6.innerHTML = randomNumber();
  num7.innerHTML = randomNumber();
  num8.innerHTML = randomNumber();
  num9.innerHTML = randomNumber();
}

console.log (randomNumber());
numX();


function highLight(){
  var displayMessage = document.getElementById("displayMessage");

if (num1.innerHTML == 1 ){
  num1.classList.add("highLight");
}
 if (num1.innerHTML == 2){
  num1.classList.add("highLight2");
}
 if(num1.innerHTML == 3){
  num1.classList.add("highLight3");
}

if (num2.innerHTML == 1 ){
  num2.classList.add("highLight");
}
 if (num2.innerHTML == 2){
  num2.classList.add("highLight2");
}
 if(num2.innerHTML == 3){
  num2.classList.add("highLight3");
}

if (num3.innerHTML == 1 ){
  num3.classList.add("highLight");
}
 if (num3.innerHTML == 2){
  num3.classList.add("highLight2");
}
 if(num3.innerHTML == 3){
  num3.classList.add("highLight3");
}

if (num4.innerHTML == 1 ){
  num4.classList.add("highLight");
}
 if (num4.innerHTML == 2){
  num4.classList.add("highLight2");
}
 if(num4.innerHTML == 3){
  num4.classList.add("highLight3");
}

if (num5.innerHTML == 1 ){
  num5.classList.add("highLight");
}
 if (num5.innerHTML == 2){
  num5.classList.add("highLight2");
}
 if(num5.innerHTML == 3){
  num5.classList.add("highLight3");
}
if (num6.innerHTML == 1 ){
  num6.classList.add("highLight");
}
 if (num6.innerHTML == 2){
  num6.classList.add("highLight2");
}
 if(num6.innerHTML == 3){
  num6.classList.add("highLight3");
}
if (num7.innerHTML == 1 ){
  num7.classList.add("highLight");
}
 if (num7.innerHTML == 2){
  num7.classList.add("highLight2");
}
 if(num7.innerHTML == 3){
  num7.classList.add("highLight3");
}
if (num8.innerHTML == 1 ){
  num8.classList.add("highLight");
}
 if (num8.innerHTML == 2){
  num8.classList.add("highLight2");
}
 if(num8.innerHTML == 3){
  num8.classList.add("highLight3");
}
if (num9.innerHTML == 1 ){
  num9.classList.add("highLight");
}
 if (num9.innerHTML == 2){
  num9.classList.add("highLight2");
}
 if(num9.innerHTML == 3){
  num9.classList.add("highLight3");
}


var row1 = new function(){
    if (num1.innerHTML === num2.innerHTML){
        displayMessage.innerHTML = "Block 1 and Block 2 match!";
    }
    if (num1.innerHTML === num3.innerHTML){
        displayMessage.innerHTML ="Block 1 and Block 3 match!";

    }
    if(num2.innerHTML === num3.innerHTML){
      displayMessage.innerHTML = "Block 2 and Block 3 match!";
    }
    if (num1.innerHTML === num2.innerHTML && num1.innerHTML === num3.innerHTML && num2.innerHTML === num3.innerHTML){
      displayMessage.innerHTML = "Block 1 , Block 2 and Block 3 match!";
    }
};

var row2 = new function(){
    if(num4.innerHTML === num5.innerHTML){
      displayMessage.innerHTML = "Block 4 and Block 5 match!";
    }

    if (num4.innerHTML === num6.innerHTML){
      displayMessage.innerHTML ="Block 4 and Block 6 ";
    }
}



// var row1 =new function(){
//
//   if(num1.innerHTML === num2.innerHTML){
//     num3.classList.remove("highLight");
//     num1.classList.add("highLight");
//     num2.classList.add("highLight");
//   }
//   if (num1.innerHTML === num3.innerHTML){
//     num2.classList.remove("highLight");
//     num1.classList.add("highLight");
//     num3.classList.add("highLight");
//   }
//   if(num2.innerHTML === num3.innerHTML){
//     num1.classList.remove("highLight");
//     num2.classList.add("highLight");
//     num3.classList.add("highLight");
//   }
//   if(num1.innerHTML === num2.innerHTML && num2.innerHTML === num3.innerHTML && num1.innerHTML === num3.innerHTML){
//     num1.classList.add("highLight");
//     num2.classList.add("highLight");
//     num3.classList.add("highLight");
//   }
// }
// var row2 = new function(){
//   if(num4.innerHTML === num5.innerHTML){
//     num6.classList.remove("highLight2");
//     num4.classList.add("highLight2");
//     num5.classList.add("highLight2");
//   }
//   if (num4.innerHTML === num6.innerHTML){
//     num5.classList.remove("highLight2");
//     num4.classList.add("highLight2");
//     num6.classList.add("highLight2");
//   }
//   if(num5.innerHTML === num6.innerHTML){
//     num4.classList.remove("highLight2");
//     num5.classList.add("highLight2");
//     num6.classList.add("highLight2");
//   }
//   if(num4.innerHTML === num5.innerHTML && num5.innerHTML === num6.innerHTML && num4.innerHTML === num6.innerHTML){
//     num4.classList.add("highLight2");
//     num5.classList.add("highLight2");
//     num6.classList.add("highLight2");
//   }
//
//
// }
// var row3 = new function(){
//   if(num7.innerHTML === num8.innerHTML){
//     num9.classList.remove("highLight3");
//     num7.classList.add("highLight3");
//     num8.classList.add("highLight3");
//   }
//   if (num7.innerHTML === num9.innerHTML){
//     num8.classList.remove("highLight3");
//     num7.classList.add("highLight3");
//     num9.classList.add("highLight3");
//   }
//   if(num8.innerHTML === num9.innerHTML){
//     num7.classList.remove("highLight3");
//     num8.classList.add("highLight3");
//     num9.classList.add("highLight3");
//   }
//   if(num7.innerHTML === num8.innerHTML && num8.innerHTML === num9.innerHTML && num7.innerHTML === num9.innerHTML){
//     num7.classList.add("highLight3");
//     num8.classList.add("highLight3");
//     num9.classList.add("highLight3");
//   }
//
//
// }

                                                                // var col1 =new function(){
                                                                //
                                                                //   if(num1.innerHTML === num2.innerHTML){
                                                                //     num3.classList.remove("highLight");
                                                                //     num1.classList.add("highLight");
                                                                //     num2.classList.add("highLight");
                                                                //   }
                                                                //   if (num1.innerHTML === num3.innerHTML){
                                                                //     num2.classList.remove("highLight");
                                                                //     num1.classList.add("highLight");
                                                                //     num3.classList.add("highLight");
                                                                //   }
                                                                //   if(num2.innerHTML === num3.innerHTML){
                                                                //     num1.classList.remove("highLight");
                                                                //     num2.classList.add("highLight");
                                                                //     num3.classList.add("highLight");
                                                                //   }
                                                                //   if(num1.innerHTML === num2.innerHTML && num2.innerHTML === num3.innerHTML && num1.innerHTML === num3.innerHTML){
                                                                //     num1.classList.add("highLight");
                                                                //     num2.classList.add("highLight");
                                                                //     num3.classList.add("highLight");
                                                                //   }
                                                                // }
                                                                // var col2 = new function(){
                                                                //   if(num4.innerHTML === num5.innerHTML){
                                                                //     num6.classList.remove("highLight2");
                                                                //     num4.classList.add("highLight2");
                                                                //     num5.classList.add("highLight2");
                                                                //   }
                                                                //   if (num4.innerHTML === num6.innerHTML){
                                                                //     num5.classList.remove("highLight2");
                                                                //     num4.classList.add("highLight2");
                                                                //     num6.classList.add("highLight2");
                                                                //   }
                                                                //   if(num5.innerHTML === num6.innerHTML){
                                                                //     num4.classList.remove("highLight2");
                                                                //     num5.classList.add("highLight2");
                                                                //     num6.classList.add("highLight2");
                                                                //   }
                                                                //   if(num4.innerHTML === num5.innerHTML && num5.innerHTML === num6.innerHTML && num4.innerHTML === num6.innerHTML){
                                                                //     num4.classList.add("highLight2");
                                                                //     num5.classList.add("highLight2");
                                                                //     num6.classList.add("highLight2");
                                                                //   }
                                                                //
                                                                //
                                                                // }
                                                                // var col3 = new function(){
                                                                //   if(num7.innerHTML === num8.innerHTML){
                                                                //     num9.classList.remove("highLight3");
                                                                //     num7.classList.add("highLight3");
                                                                //     num8.classList.add("highLight3");
                                                                //   }
                                                                //   if (num7.innerHTML === num9.innerHTML){
                                                                //     num8.classList.remove("highLight3");
                                                                //     num7.classList.add("highLight3");
                                                                //     num9.classList.add("highLight3");
                                                                //   }
                                                                //   if(num8.innerHTML === num9.innerHTML){
                                                                //     num7.classList.remove("highLight3");
                                                                //     num8.classList.add("highLight3");
                                                                //     num9.classList.add("highLight3");
                                                                //   }
                                                                //   if(num7.innerHTML === num8.innerHTML && num8.innerHTML === num9.innerHTML && num7.innerHTML === num9.innerHTML){
                                                                //     num7.classList.add("highLight3");
                                                                //     num8.classList.add("highLight3");
                                                                //     num9.classList.add("highLight3");
                                                                //   }
                                                                //
                                                                //
                                                                // }





// var col1 =new function(){
//   if(num1.innerHTML === num4.innerHTML){
//     num7.classList.remove("highLight");
//     num1.classList.add("highLight");
//     num2.classList.add("highLight");
//   }
//   if (num1.innerHTML === num7.innerHTML){
//     num4.classList.remove("highLight");
//     num1.classList.add("highLight");
//     num7.classList.add("highLight");
//   }
//   if(num4.innerHTML === num7.innerHTML){
//     num1.classList.remove("highLight");
//     num4.classList.add("highLight");
//     num7.classList.add("highLight");
//   }
//   if(num1.innerHTML === num4.innerHTML && num4.innerHTML === num7.innerHTML && num1.innerHTML === num7.innerHTML){
//     num1.classList.add("highLight");
//     num4.classList.add("highLight");
//     num7.classList.add("highLight");
//   }
// }
// var col2 = new function(){
//   if(num2.innerHTML === num5.innerHTML){
//     num8.classList.remove("highLight2");
//     num2.classList.add("highLight2");
//     num5.classList.add("highLight2");
//   }
//   if (num2.innerHTML === num8.innerHTML){
//     num5.classList.remove("highLight2");
//     num2.classList.add("highLight2");
//     num8.classList.add("highLight2");
//   }
//   if(num5.innerHTML === num8.innerHTML){
//     num2.classList.remove("highLight2");
//     num5.classList.add("highLight2");
//     num8.classList.add("highLight2");
//   }
//   if(num2.innerHTML === num5.innerHTML && num5.innerHTML === num8.innerHTML && num2.innerHTML === num8.innerHTML){
//     num2.classList.add("highLight2");
//     num5.classList.add("highLight2");
//     num8.classList.add("highLight2");
//   if(randomNumber() === 1){
//     numX.classList.add("highLight");
//   }
//   if(randomNumber() === 2){
//     numX.classList.add("highLight2");
//   }
//   if (randomNumber() === 3){
//     numX.classList.add("highLight3");
//   }
// }
// var col3 = new function(){
//   if(num3.innerHTML === num6.innerHTML){
//     num9.classList.remove("highLight3");
//     num3.classList.add("highLight3");
//     num6.classList.add("highLight3");
//   }
//   if (num3.innerHTML === num9.innerHTML){
//     num6.classList.remove("highLight3");
//     num3.classList.add("highLight3");
//     num9.classList.add("highLight3");
//   }
//   if(num6.innerHTML === num9.innerHTML){
//     num3.classList.remove("highLight3");
//     num6.classList.add("highLight3");
//     num9.classList.add("highLight3");
//   }
//   if(num3.innerHTML === num6.innerHTML && num6.innerHTML === num9.innerHTML && num3.innerHTML === num9.innerHTML){
//     num3.classList.add("highLight3");
//     num6.classList.add("highLight3");
//     num9.classList.add("highLight3");
//   }
//
//
// }




              // var row1 = new function(){
              // if("number" === 1){
              //   number.classList.add("highlight");
              //   number.classList.remove("highLight2");
              //   number.classList.remove("highLight3");
              // }
              //
              // if("number" === 2){
              //   number.classList.add("highlight2");
              //   number.classList.remove("highLight");
              //   number.classList.remove("highLight3");
              // }
              // if ("number" === 3 ){
              //   number.classList.add("highlight3");
              //   number.classList.remove("highLight2");
              //   number.classList.remove("highLight");
              // }
              // }
              //
              // var row2 = new function(){
              // if("number" === 1){
              //   number.classList.add("highlight");
              //   number.classList.remove("highLight2");
              //   number.classList.remove("highLight3");
              // }
              //
              // if("number" === 2){
              //   number.classList.add("highlight2");
              //   number.classList.remove("highLight");
              //   number.classList.remove("highLight3");
              // }
              // if ("number" === 3 ){
              //   number.classList.add("highlight3");
              //   number.classList.remove("highLight2");
              //   number.classList.remove("highLight");
              // }
              // }
              //
              // var row3 = new function(){
              // if("number" === 1){
              //   number.classList.add("highlight");
              //   number.classList.remove("highLight2");
              //   number.classList.remove("highLight3");
              // }
              //
              // if("number" === 2){
              //   number.classList.add("highlight2");
              //   number.classList.remove("highLight");
              //   number.classList.remove("highLight3");
              // }
              // if ("number" === 3 ){
              //   number.classList.add("highlight3");
              //   number.classList.remove("highLight2");
              //   number.classList.remove("highLight");
              // }
              // }



};
highLight();
displayMessage();

// if (num1.innerHTML === num2.innerHTML){
// num3.classList.remove("highLight");
// num1.classList.add("highLight");
// num2.classList.add("highLight");
// displayMessage.innerHTML = "Number 1 and Number 2 match!";
// }
//
// if(num1.innerHTML === num3.innerHTML){
//   num2.classList.remove("highLight");
//   num1.classList.add("highLight");
//   num3.classList.add("highLight");
//   displayMessage.innerHTML ="Number 1 and Number 3 match!";
// }
//
//
// if(num1.innerHTML === num4.innerHTML){
//   num2.classList.remove("highLight");
//   num3.classList.remove("highLight");
//   num1.classList.add("highLight");
//   num4.classList.add("highLight");
//   displayMessage.innerHTML = "Number 1 and Number 4 match!";
// }
// if(num1.innerHTML === num5.innerHTML){
//   num2.classList.remove("highLight");
//   num3.classList.remove("highLight");
//   num4.classList.remove("highLight");
//   num1.classList.add("highLight");
//   num5.classList.add("highLight");
//   displayMessage.innerHTML = "Number 1 and Number 5 match!";
// }
// if(num1.innerHTML === num6.innerHTML){
//   num2.classList.remove("highLight");
//   num3.classList.remove("highLight");
//   num4.classList.remove("highLight");
//   num5.classList.remove("highLight");
//   num9.classList.remove("highLight");
//   num1.classList.add("highLight");
//   num6.classList.add("highLight");
//   displayMessage.innerHTML = "Number 1 and Number 6 match!";
//
//     }
// if (num1.innerHTML === num7.innerHTML){
//   num2.classList.remove("highLight");
//   num3.classList.remove("highLight");
//   num4.classList.remove("highLight");
//   num5.classList.remove("highLight");
//   num6.classList.remove("highLight");
//   num8.classList.remove("highLight");
//   num9.classList.remove("highLight");
//   num1.classList.add("highLight");
//   num7.classList.add("highLight");
//   displayMessage.innerHTML = "Number 1 and Number 7 match!";
//
//
// }
// if(num1.innerHTML === num8.innerHTML){
// num2.classList.remove("highLight");
// num3.classList.remove("highLight");
// num4.classList.remove("highLight");
// num5.classList.remove("highLight");
// num6.classList.remove("highLight");
// num7.classList.remove("highLight");
// num9.classList.remove("highLight");
// num1.classList.add("highLight");
// num8.classList.add("highLight");
// displayMessage.innerHTML = "Number 1 and Number 8 match!";
// }
//
// if(num1.innerHTML === num9.innerHTML){
// num2.classList.remove("highLight");
// num3.classList.remove("highLight");
// num4.classList.remove("highLight");
// num5.classList.remove("highLight");
// num6.classList.remove("highLight");
// num7.classList.remove("highLight");
// num8.classList.remove("highLight");
// num1.classList.add("highLight");
// num9.classList.add("highLight");
// displayMessage.innerHTML = "Number 1 and Number 9 match!";
// }
//
// if(num2.innerHTML === num3.innerHTML){
//   num1.classList.remove("highLight");
//   num2.classList.add("highLight");
//   num3.classList.add("highLight");
//   displayMessage.innerHTML = "Number 2 and Number 3 match!";
// }
// if(num2.innerHTML === num4.innerHTML){
//   num1.classList.remove("highLight");
//   num3.classList.remove("highLight");
//   num2.classList.add("highLight");
//   num4.classList.add("highLight");
//   displayMessage.innerHTML = "Number 2 and Number 4 match!";
// }
// if(num2.innerHTML === num5.innerHTML){
//   num1.classList.remove("highLight");
//   num3.classList.remove("highLight");
//   num4.classList.remove("highLight");
//   num2.classList.add("highLight");
//   num5.classList.add("highLight");
//   displayMessage.innerHTML = "Number 2 and Number 5 match!";
// }
// if(num2.innerHTML === num6.innerHTML){
//   num1.classList.remove("highLight");
//   num3.classList.remove("highLight");
//   num4.classList.remove("highLight");
//   num5.classList.remove("highLight");
//   num2.classList.add("highLight");
//   num6.classList.add("highLight");
//   displayMessage.innerHTML = "Number 2 and Number 6 match!";
// }
// if(num2.innerHTML === num7.innerHTML){
//   num1.classList.remove("highLight");
//   num3.classList.remove("highLight");
//   num4.classList.remove("highLight");
//   num5.classList.remove("highLight");
//   num6.classList.remove("highLight");
//   num2.classList.add("highLight");
//   num7.classList.add("highLight");
//   displayMessage.innerHTML = "Number 2 and Number 7 match!";
// }
// if(num2.innerHTML === num8.innerHTML){
//   num1.classList.remove("highLight");
//   num3.classList.remove("highLight");
//   num4.classList.remove("highLight");
//   num5.classList.remove("highLight");
//   num6.classList.remove("highLight");
//   num7.classList.remove("highLight");
//   num9.classList.remove("highLight");
//   num2.classList.add("highLight");
//   num8.classList.add("highLight");
//   displayMessage.innerHTML = "Number 2 and Number 8 match!";
// }
// if(num2.innerHTML === num9.innerHTML){
//   num1.classList.remove("highLight");
//   num3.classList.remove("highLight");
//   num4.classList.remove("highLight");
//   num5.classList.remove("highLight");
//   num6.classList.remove("highLight");
//   num7.classList.remove("highLight");
//   num8.classList.remove("highLight");
//   num2.classList.add("highLight");
//   num9.classList.add("highLight");
//   displayMessage.innerHTML = "Number 2 and Number 9 match!";
// }



// function button(){
//   var button = document.getElementById("Refresh");
//     remove.document.classList.remove("highLight");
//     divPrintR1();
//     highLight();
//
// };
// var el = document.getElementById("Refresh");
// el.addEventListener("click", button(), true);
