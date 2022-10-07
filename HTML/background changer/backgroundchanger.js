const but=document.querySelector('button');
but.addEventListener('click',function(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    const col=`rgb(${r},${g},${b})`;
    document.body.style.backgroundColor=col;
})
