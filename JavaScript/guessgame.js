let guess = prompt('guess a number between 1 and 10')
let num = Math.floor(Math.random() * 10) + 1

if(guess==num){
  alert('right guess')
}else{
  alert('wrong guess')
}
