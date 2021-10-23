let res = localStorage.getItem('result');

// 
const h1 = document.querySelector('.Congo'); 
// h1.textContent = "HOla";
const h2 = document.getElementById('obt');
// const mrk = document.querySelector('.marks');
// h3.textContent = localStorage.getItem('result')
const h = document.getElementById('perc');

if (res>= 40){
        
        h1.textContent = "CONGRATS !! :)";
        // h2.textContent = "AWESOME -:- ";
        h2.textContent = res;
        h2.style.fontSize='40px';
        h2.style.color="Black";
        h.style.color="Black";
        h.textContent = (res*100)/50;
        h.style.fontSize='30px';
    }
    else if (res<40){
        
        h1.textContent = "LEARN MORE !!";
        h2.textContent = res;
        h2.style.color="Orange";
        h.style.color="Orange";
        h2.style.fontSize='40px';
        h.textContent = (res*100)/50;
        h.style.fontSize='30px';
    }
    else{
        
        h1.textContent = "BAD !! :(";
        // h2.textContent = "DISAPPOINT -:- ";
        h2.textContent = res;
        h2.style.color="red";
        h.style.color="red";
        h2.style.fontSize='40px';
        h.textContent = (res*100)/50;
        h.style.fontSize='30px';
    }



// h.textContent = 
// console.log(localStorage.getItem('result'));