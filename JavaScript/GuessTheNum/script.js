/*GuessTheNUmber between 0 and 100 game*/

var chk = document.getElementById("check") ;
var res = document.getElementById("reset") ;
var inp = document.getElementById("inpval") ;
var ans = document.getElementById("result");
var rnd = Math.floor(Math.random()*101) ;


chk.addEventListener('click',function(){
  
if(inp.value==rnd){
  ans.innerHTML="Correct" ;
}else{
  ans.innerHTML="Try Again";
  
}
});

res.addEventListener('click',function(){
  inp.value = " " ;
  ans.innerHTML = "" ;
})

/*You can check the answer in console.*/
console.log(rnd) ;