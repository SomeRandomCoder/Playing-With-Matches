<script type="text/javascript">
var randomNumber = function(range){
  return Math.floor((Math.random() * 9)+1);
};
divPrint = function(){
  var num = document.getElementById("num");
  num.innerHTML=randomNumber();
}
console.log (randomNumber());
divPrint();
  </script>
