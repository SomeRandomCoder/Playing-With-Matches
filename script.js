
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
var diag = document.getElementById("displayMessageDiagonal");

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
//
// if (num1.innerHTML == 1 )
//   {
//     num1.classList.add("highLight");
//   }
//
// if (num1.innerHTML == 2)
//   {
//     num1.classList.add("highLight2");
//   }
//
// if(num1.innerHTML == 3)
//   {
//     num1.classList.add("highLight3");
//   }
//
// if (num2.innerHTML == 1 )
//   {
//     num2.classList.add("highLight");
//   }
//
// if (num2.innerHTML == 2)
//   {
//     num2.classList.add("highLight2");
//   }
// if(num2.innerHTML == 3)
//   {
//     num2.classList.add("highLight3");
//   }
//
// if (num3.innerHTML == 1 )
//   {
//     num3.classList.add("highLight");
//   }
// if (num3.innerHTML == 2)
//   {
//     num3.classList.add("highLight2");
//   }
// if(num3.innerHTML == 3)
//   {
//     num3.classList.add("highLight3");
//   }
//
// if (num4.innerHTML == 1 )
//   {
//     num4.classList.add("highLight");
//   }
// if (num4.innerHTML == 2)
//   {
//     num4.classList.add("highLight2");
//   }
// if(num4.innerHTML == 3)
//   {
//     num4.classList.add("highLight3");
//   }
//
// if (num5.innerHTML == 1 ){
//   num5.classList.add("highLight");
// }
//  if (num5.innerHTML == 2){
//   num5.classList.add("highLight2");
// }
//  if(num5.innerHTML == 3){
//   num5.classList.add("highLight3");
// }
// if (num6.innerHTML == 1 ){
//   num6.classList.add("highLight");
// }
//  if (num6.innerHTML == 2){
//   num6.classList.add("highLight2");
// }
//  if(num6.innerHTML == 3){
//   num6.classList.add("highLight3");
// }
// if (num7.innerHTML == 1 ){
//   num7.classList.add("highLight");
// }
//  if (num7.innerHTML == 2){
//   num7.classList.add("highLight2");
// }
//  if(num7.innerHTML == 3){
//   num7.classList.add("highLight3");
// }
// if (num8.innerHTML == 1 ){
//   num8.classList.add("highLight");
// }
//  if (num8.innerHTML == 2){
//   num8.classList.add("highLight2");
// }
//  if(num8.innerHTML == 3){
//   num8.classList.add("highLight3");
// }
// if (num9.innerHTML == 1 ){
//   num9.classList.add("highLight");
// }
//  if (num9.innerHTML == 2){
//   num9.classList.add("highLight2");
// }
//  if(num9.innerHTML == 3){
//   num9.classList.add("highLight3");
// }
  var row1 =new function(){
    if (num1.innerHTML == 1 )
      {
        num1.classList.add("highLight");
      }
    if (num1.innerHTML == 2)
      {
        num1.classList.add("highLight2");
      }
    if(num1.innerHTML == 3)
      {
        num1.classList.add("highLight3");
      }
    if (num2.innerHTML == 1 )
      {
        num2.classList.add("highLight");
      }
    if (num2.innerHTML == 2)
      {
        num2.classList.add("highLight2");
      }
    if(num2.innerHTML == 3)
      {
        num2.classList.add("highLight3");
      }
    if (num3.innerHTML == 1 )
      {
        num3.classList.add("highLight");
      }
    if (num3.innerHTML == 2)
      {
        num3.classList.add("highLight2");
      }
    if(num3.innerHTML == 3)
      {
        num3.classList.add("highLight3");
      }
  if(num1.innerHTML === num2.innerHTML){

    displayMessageRow1.innerHTML = "Block 1 and Block 2 match! There are only two matching blocks!";
  }
 if (num1.innerHTML === num3.innerHTML){

    displayMessageRow1.innerHTML ="Block 1 and Block 3 match! There are only two matching blocks!";
  }
    if(num2.innerHTML === num3.innerHTML){

    displayMessageRow1.innerHTML = "Block 2 and Block 3 match! There are only two matching blocks!";
  }
    if(num1.innerHTML === num2.innerHTML && num2.innerHTML === num3.innerHTML && num1.innerHTML === num3.innerHTML){

     displayMessageRow1.innerHTML = "Row 1 Matches";
  }

  if(num1.innerHTML != num2.innerHTML && num2.innerHTML != num3.innerHTML && num1.innerHTML != num3.innerHTML){

   displayMessageRow1.innerHTML = "There are no Matches";
}
}

  var row2 =new function(){
    if (num4.innerHTML == 1 )
      {
        num4.classList.add("highLight");
      }

  else if (num4.innerHTML == 2)
      {
        num4.classList.add("highLight2");
      }

  else if(num4.innerHTML == 3)
      {
        num4.classList.add("highLight3");
      }

    if (num5.innerHTML == 1 )
      {
        num5.classList.add("highLight");
      }

    else if (num5.innerHTML == 2)
      {
        num5.classList.add("highLight2");
      }
    else if(num5.innerHTML == 3)
      {
        num5.classList.add("highLight3");
      }

    if (num6.innerHTML == 1 )
      {
        num6.classList.add("highLight");
      }
    else if (num6.innerHTML == 2)
      {
        num6.classList.add("highLight2");
      }
    else if(num6.innerHTML == 3)
      {
        num6.classList.add("highLight3");
      }
        if(num4.innerHTML === num5.innerHTML)
           {
             displayMessageRow2.innerHTML = "Block 4 and Block 5 match! There are only two matching blocks!";
           }
       if (num4.innerHTML === num6.innerHTML)
           {
             displayMessageRow2.innerHTML ="Block 4 and Block 6 match! There are only two matching blocks!";
           }
          if(num5.innerHTML === num6.innerHTML)
           {
             displayMessageRow2.innerHTML = "Block 5 and Block 6 match! There are only two matching blocks!";
           }
          if(num4.innerHTML === num5.innerHTML && num4.innerHTML === num6.innerHTML && num5.innerHTML === num6.innerHTML)
           {
             displayMessageRow2.innerHTML = "Row 2 matches!";
           }
           if(num4.innerHTML != num5.innerHTML && num4.innerHTML != num6.innerHTML && num5.innerHTML != num6.innerHTML)
            {
              displayMessageRow2.innerHTML = "There are no matches!";
            }

}
      var row3 =new function(){
        if (num7.innerHTML == 1 )
          {
            num7.classList.add("highLight");
          }

       if (num7.innerHTML == 2)
          {
            num7.classList.add("highLight2");
          }

       if(num7.innerHTML == 3)
          {
            num7.classList.add("highLight3");
          }

        if (num8.innerHTML == 1 )
          {
            num8.classList.add("highLight");
          }

       if (num8.innerHTML == 2)
          {
            num8.classList.add("highLight2");
          }
        if(num8.innerHTML == 3)
          {
            num8.classList.add("highLight3");
          }

        if (num9.innerHTML == 1 )
          {
            num9.classList.add("highLight");
          }
         if (num9.innerHTML == 2)
          {
            num9.classList.add("highLight2");
          }
         if(num9.innerHTML == 3)
          {
            num9.classList.add("highLight3");
          }
  if(num7.innerHTML === num8.innerHTML)
     {
       displayMessageRow3.innerHTML = "Block 7 and Block 8 match!There are only two matching blocks!";
     }
    if (num7.innerHTML === num9.innerHTML)
     {
       displayMessageRow3.innerHTML ="Block 7 and Block 9 match! There are only two matching blocks!";
     }
    if(num8.innerHTML === num9.innerHTML)
     {
       displayMessageRow3.innerHTML = "Block 8 and Block 9 match! There are only two matching blocks!";
     }
    if(num7.innerHTML === num8.innerHTML && num8.innerHTML === num9.innerHTML && num7.innerHTML === num9.innerHTML)
     {
       displayMessageRow3.innerHTML = "Row 3 matches!";
     }
     if(num7.innerHTML != num8.innerHTML && num8.innerHTML != num9.innerHTML && num7.innerHTML != num9.innerHTML)
      {
        displayMessageRow3.innerHTML = "There are no matches!";
      }
}

 var col1 =new function(){
   if (num1.innerHTML == 1 )
     {
       num1.classList.add("highLight");
     }

   if (num1.innerHTML == 2)
     {
       num1.classList.add("highLight2");
     }

   if(num1.innerHTML == 3)
     {
       num1.classList.add("highLight3");
     }
   if (num4.innerHTML == 1 )
     {
       num4.classList.add("highLight");
     }
   if (num4.innerHTML == 2)
     {
       num4.classList.add("highLight2");
     }
   if(num4.innerHTML == 3)
     {
       num4.classList.add("highLight3");
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
 if(num1.innerHTML === num4.innerHTML)
   {
    displayMessageCol1.innerHTML = "Block 1 and Block 4 match!There are only two matching blocks!";
   }
 if (num1.innerHTML === num7.innerHTML)
   {
    displayMessageCol1.innerHTML ="Block 1 and Block 7 match!There are only two matching blocks!";
   }
  if(num4.innerHTML === num7.innerHTML)
 {
   displayMessageCol1.innerHTML = "Block 4 and Block 7 match!There are only two matching blocks!";
 }
 if(num1.innerHTML === num4.innerHTML && num4.innerHTML === num7.innerHTML && num1.innerHTML === num7.innerHTML)
 {
  displayMessageCol1.innerHTML = "Column 1 matches!";
 }
 if(num1.innerHTML != num4.innerHTML && num4.innerHTML != num7.innerHTML && num1.innerHTML != num7.innerHTML){
   displayMessageCol1.innerHTML ="There are no matches!";
 }
}

 var col2 = new function(){

 if(num2.innerHTML === num5.innerHTML)
   {
      displayMessageCol2.innerHTML="Block2 and Block 5 match!There are only two matching blocks!";
   }
 if (num2.innerHTML === num8.innerHTML)
   {
      displayMessageCol2.innerHTML="Block2 and Block 8 match!There are only two matching blocks!";
   }
 if(num5.innerHTML === num8.innerHTML)
   {
    displayMessageCol2.innerHTML="Block 5 and Block 8 match!There are only two matching blocks!";
   }
 if(num2.innerHTML === num5.innerHTML && num5.innerHTML === num8.innerHTML && num2.innerHTML === num8.innerHTML)
   {
    displayMessageCol2.innerHTML="Column 2 matches!";
   }
   if(num2.innerHTML != num5.innerHTML && num5.innerHTML != num8.innerHTML && num2.innerHTML != num8.innerHTML)
     {
      displayMessageCol2.innerHTML="There are no matches!";
     }

 }

var col3 = new function(){
  if (num3.innerHTML == 1 )
    {
      num3.classList.add("highLight");
    }
  if (num3.innerHTML == 2)
    {
      num3.classList.add("highLight2");
    }
  if(num3.innerHTML == 3)
    {
      num3.classList.add("highLight3");
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
   if (num9.innerHTML == 1 ){
    num9.classList.add("highLight");
  }
   if (num9.innerHTML == 2){
    num9.classList.add("highLight2");
  }
   if(num9.innerHTML == 3){
    num9.classList.add("highLight3");
  }
  if(num3.innerHTML === num6.innerHTML){
    displayMessageCol3.innerHTML = "Block 3 and Block 6 match! There are only two matching blocks!";
  }
  if (num3.innerHTML === num9.innerHTML){
      displayMessageCol3.innerHTML = "Block 3 and Block 9 match!There are only two matching blocks!";
  }
  if(num6.innerHTML === num9.innerHTML){
    displayMessageCol3.innerHTML = "Block 6 and Block 9 match!There are only two matching blocks!";
  }
  if(num3.innerHTML === num6.innerHTML && num6.innerHTML === num9.innerHTML && num3.innerHTML === num9.innerHTML){
    displayMessageCol3.innerHTML ="Column 3 matches!";
  }
  if(num3.innerHTML != num6.innerHTML && num3.innerHTML != num9.innerHTML && num6.innerHTML != num9.innerHTML){
    displayMessageCol3.innerHTML="There are no matches!"
  }


}

var diag =new function(){
  if (num1.innerHTML == 1 )
    {
      num1.classList.add("highLight");
    }

  if (num1.innerHTML == 2)
    {
      num1.classList.add("highLight2");
    }

  if(num1.innerHTML == 3)
    {
      num1.classList.add("highLight3");
    }

    if (num3.innerHTML == 1 )
    {
      num3.classList.add("highLight");
    }
  if (num3.innerHTML == 2)
    {
      num3.classList.add("highLight2");
    }
  if(num3.innerHTML == 3)
    {
      num3.classList.add("highLight3");
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
  if (num7.innerHTML == 1 ){
    num7.classList.add("highLight");
  }
   if (num7.innerHTML == 2){
    num7.classList.add("highLight2");
  }
   if(num7.innerHTML == 3){
    num7.classList.add("highLight3");
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

  if(num1.innerHTML===num5.innerHTML && num1.innerHTML===num9.innerHTML && num5.innerHTML=== num9.innerHTML){
    displayMessageDiagonal.innerHTML="Top left to bottom right match!";
  }
  else if(num3.innerHTML === num5.innerHTML && num3.innerHTML === num7.innerHTML && num5.innerHTML===num7.innerHTML) {
    displayMessageDiagonal.innerHTML="Top right to bottom left match!";
  }
   else if(num1.innerHTML === num5.innerHTMl && num1.innerHTML === num9.innerHTML && num5.innerHTML === num9.innerHTMl &&
      num3.innerHTML===num5.innerHTML && num3.innerHTML === num7.innerHTML &&num5.innerHTML === num7.innerHTML){
      displayMessageDiagonal.innerHTML =" All Diagonals match!";
      }
    else {
      displayMessageDiagonal.innerHTML ="No matches";
    }
}
};
// highLight();
// displayMessage();
// row1();
// row2();
//  row3();
//  col1();
//  col2();
//  col3();
//  diag();

function reload(){
  location.reload(false);
}
     function button2(){
       var button2=document.getElementById("Refresh");
      numX();
      reload();
     };
     function button(){
       var button = document.getElementById("HighLight");
         highLight();
          };

     var El=document.getElementById("Refresh");
     El.addEventListener("click", button, true);

     var El=document.getElementById("Generate");
     El.addEventListener("click", button, true);
