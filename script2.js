document.write("Hello!");
function sayHello(){
 var response = prompt("what's your name?");
 alert("Hello "+response+",Let's play a game!Now Press another botton to begin!");
}
  var b=randomNumber();
function guess(){
    var a=prompt("please type your guess number between 1-20","0");
      alert(a);
      if(a>b){
      alert("Too big!");
      guess();
    }
      else if(a<b){
        alert("Too small!");
        guess();
      }
      else{
        var result=confirm("Congratulate!You are right!Do you want to continue to play?");
      }
      if(result){
        one=randomNumber();
        guess();
      }
      else{
        alert("goodbye~");
      }
    }
    function randomNumber(){
      return Math.round(Math.random()*20);
    }
