var count=-1;
var arr=[];
var crashSound=new Audio("crash.mp3");
var music=new Audio("music.mp3");
// var foodmusic=new Audio("food.mp3");
function food(){
    // foodmusic.play();
    var x=Math.floor(Math.random()*9+1)*45;
    var y=Math.floor(Math.random()*9+1)*45;
    var css="left:"+x+"px;top:"+y+"px;";
    parent=document.getElementById("container");
    foodvar=document.createElement("div");
    foodvar.setAttribute("class","food");
    foodvar.style=css;
    parent.appendChild(foodvar);
    count=count+1;
    document.getElementsByClassName("score")[0].innerHTML="Score : "+count;
    document.getElementsByClassName("level")[0].innerHTML="Level : "+localStorage.getItem("level");
}
var i=0;
var snakeface=document.getElementsByClassName("snakeface")[0];
snakeface.style.left=0;
snakeface.style.top=0;
function bodyelement(){
    i=i+1;
    var sbody=document.createElement('div');
    sbody.setAttribute("class","snakebody");
    sbody.setAttribute("id","snakebody"+i);
    parent.appendChild(sbody);
    document.getElementById("snakebody"+i).style.left=parseInt(document.getElementById("snakebody"+(i-1)).style.left)-x1*45+"px";
    document.getElementById("snakebody"+i).style.top=parseInt(document.getElementById("snakebody"+(i-1)).style.top)-y1*45+"px";
    arr.push("snakebody"+i);
}
foodvar=document.getElementsByClassName("food")[0];
food();
var x1;
var y1;
var isOn = 1;
window.addEventListener("keydown",(e)=>{
    if((e.key==="ArrowRight"||e.key==="ArrowLeft"||e.key==="ArrowUp"||e.key==="ArrowDown"||e.key==="d"||e.key==="a"||e.key==="w"||e.key==="s") && isOn)
        music.play();
    switch (e.key) {
        case "ArrowRight":
            x1=1;
            y1=0;
            break;
        case "d":
            x1=1;
            y1=0;
            break;
        case "ArrowLeft":
            x1=-1;
            y1=0;
            break;
        case "a":
            x1=-1;
            y1=0;
            break;
        case "ArrowUp":
            x1=0;
            y1=-1;
            break;
        case "w":
            x1=0;
            y1=-1;
            break;
        case "ArrowDown":
            x1=0;
            y1=1;
            break;
        case "s":
            x1=0;
            y1=1;
            break;
    }
});
var lev=[300,220,120,100,80];
var level=localStorage.getItem("level");
interval=setInterval(animate,lev[level-1]);
function animate(){
    var x=parseInt(document.getElementsByClassName("food")[0].style.left);
    var y=parseInt(document.getElementsByClassName("food")[0].style.top);    
    for(var k=i;k>0;k--)
    {
        document.getElementById("snakebody"+k).style.left=parseInt(document.getElementById("snakebody"+(k-1)).style.left)+"px";
        document.getElementById("snakebody"+k).style.top=parseInt(document.getElementById("snakebody"+(k-1)).style.top)+"px";
    }
    snakeface.style.left=parseInt(snakeface.style.left)+x1*45+"px";
    snakeface.style.top=parseInt(snakeface.style.top)+y1*45+"px";
    if(parseInt(snakeface.style.left)==x && parseInt(snakeface.style.top)==y)
    {
        // console.log(foodvar);
        parent.removeChild(foodvar);
        bodyelement();
        food();
        // console.log(parent);
    }
    if(parseInt(snakeface.style.left)<0 || parseInt(snakeface.style.left)>435)
    {
        music.pause();
        crashSound.play();
        isOn=0;
        clearInterval(interval);
        document.getElementsByClassName("gameover")[0].style.display="block";
    }
    else if(parseInt(snakeface.style.top)<0 || parseInt(snakeface.style.top)>405)
    {
        music.pause();
        crashSound.play();
        isOn=0;
        clearInterval(interval);
        document.getElementsByClassName("gameover")[0].style.display="block";
    }
    for(var k=i;k>0;k--)
    {
        var fl=document.getElementById("snakebody0").style.left;
        var ft=document.getElementById("snakebody0").style.top;
        var arl=document.getElementById(arr[k-1]).style.left;
        var art=document.getElementById(arr[k-1]).style.top;
        if(fl==arl && ft==art)
        {
            music.pause();
            crashSound.play();
            isOn=0;
            clearInterval(interval);
            document.getElementsByClassName("gameover")[0].style.display="block";
            break;
        }
    }
}