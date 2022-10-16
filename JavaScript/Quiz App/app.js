console.log('Hello World');

const form = document.querySelector('.questions');
const result = document.querySelector('.score');
const notDiv = document.querySelector('.score-card');
const correctOption = document.querySelector('.correct1');
const btn50 = document.querySelector('.btn5');
const openBtn = document.querySelector('#see');

const q1 = document.querySelector('.options1');
const q2 = document.querySelector('.options2');
const q3 = document.querySelector('.options3');
const q4 = document.querySelector('.options4');

const timer = document.querySelector('.timer');
const buddy = document.querySelector('.buddy');
const restart = document.querySelector('#restart');
const answer = document.querySelector('#answer');
const btn1 = document.querySelector('#btn');
const close = document.querySelector('.close');

// const q1a = document.querySelector('#q1a');
// const q2a = document.querySelector('#q2a');
// const q3a = document.querySelector('#q3a');
// const q4a = document.querySelector('#q4a');

const answers = ['A', 'C', 'B', 'D'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    timer.classList.add('none');
    form.classList.add('none');
    buddy.classList.add('none');
    restart.classList.remove('none');
    answer.classList.remove('none');
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let score=0;
   
    userAnswers.forEach((answer, index) => {
        if(answer === answers[index]){
            score += 25;
            
        }
        });
    // console.log(score);
    window.scrollTo(0, 0);
    notDiv.classList.remove('none');
    let times=0;
    // result.querySelector('span').innerText = `${score}%`;
    const scoreAnimation = setInterval( () => {
        result.querySelector('span').innerText = `${times}%`;
        if(times===score){
            clearInterval(scoreAnimation);
        } else{
            times++;
        }
    }, 1);
    const q1a = document.querySelector('#q1a');
    const q2a = document.querySelector('#q2a');
    const q3a = document.querySelector('#q3a');
    const q4a = document.querySelector('#q4a'); 
    q1a.setAttribute('id','qa');
    q2a.setAttribute('id','qa');
    q3a.setAttribute('id','qa');
    q4a.setAttribute('id','qa');

});

let unattempted=[''];
let i=0;
btn50.addEventListener('click', e => {
    e.preventDefault();
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    // console.log(userAnswers);
    userAnswers.forEach((value,index) => {
        // console.log(index);
        if(value === ""){
            
            unattempted[i] = index;
            i++;
        }
    });
    console.log(unattempted);
    for(let i = 0; i<=4 ; i++){
        if(unattempted[i] === 1){
            q2.innerHTML = `<div class="options">
            <div class="first-half">
                       
                <div class="option2">
                    <input type="radio" name="q2" value="B">
                    <label>It cannot be zero</label>
                </div>
            </div>
            <div class="second-half">
                <div class="option3">
                    <input type="radio" name="q2" value="C">
                    <label id="q2a">It is zero</label>
                
                </div>
            </div>
        </div>`;
        } else if (unattempted[i] === 0){
            q1.innerHTML = `<div class="options options1">
            <div class="first-half">
                <div class="option1">
                    <input type="radio" name="q1" value="A">
                    <label id="q1a">Newton, MLT<sup>-2</sup></label>
                </div>
                        
                 
            </div>
            <div class="second-half">
                <div class="option3">
                    <input type="radio" name="q1" value="C">
                    <label>Newton, MLT<sup>-3</sup></label>
                </div>
        
                
            </div>
        </div>`;
        } else if(unattempted[i] === 2){
            q3.innerHTML = `<div class="options options3">
            <div class="first-half">
                        
                <div class="option2">
                    <input type="radio" name="q3" value="B">
                    <label id="q3a"">2R</label>
                </div>
            </div>
            <div class="second-half">
                
                <div class="option4">
                    <input type="radio" name="q3" value="D">
                    <label>Zero</label>
                </div>
            </div>
        </div>`;
        } else if (unattempted[i] === 3){
            q4.innerHTML = `<div class="options options4">
            <div class="first-half">
                
                        
                <div class="option2">
                    <input type="radio" name="q4" value="B">
                    <label>Velocity</label>
                </div>
            </div>
            <div class="second-half">
                
        
                <div class="option4">
                    <input type="radio" name="q4" value="D">
                    <label id="q4a">None of the above</label>
                </div>
            </div>
        </div>`;
        }
    }
});

openBtn.addEventListener('click', e => {
    e.preventDefault();
    form.classList.add('visible');
    openBtn.classList.add('none');
    setTimeout(countdown, 65000);
    setInterval(countdown1, 1000);
});


function countdown(){
    // e.preventDefault();
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let score=0;
    timer.classList.add('none');
    form.classList.add('none');
    buddy.classList.add('none');
    restart.classList.remove('none');
    answer.classList.remove('none');
    userAnswers.forEach((answer, index) => {
        if(answer === answers[index]){
            score += 25;
            
        }
        });
    // console.log(score);
    window.scrollTo(0, 0);
    notDiv.classList.remove('none');
    let times=0;
    // result.querySelector('span').innerText = `${score}%`;
    const scoreAnimation = setInterval( () => {
        result.querySelector('span').innerText = `${times}%`;
        if(times===score){
            clearInterval(scoreAnimation);
        } else{
            times++;
        }
    }, 1);
    const q1a = document.querySelector('#q1a');
    const q2a = document.querySelector('#q2a');
    const q3a = document.querySelector('#q3a');
    const q4a = document.querySelector('#q4a'); 
    q1a.setAttribute('id','qa');
    q2a.setAttribute('id','qa');
    q3a.setAttribute('id','qa');
    q4a.setAttribute('id','qa');
    // clearInterval(temp1);
}
let temp=60;
let anuj,tushar;
function countdown1(){
    anuj=Math.floor(temp/60);
    tushar=Math.floor(temp-(anuj*60));
    temp=temp-1;
    timer.innerText = `${anuj} : ${tushar} Left`;
    // console.log(temp);
    if(temp===-2){
        // clearInterval(timer1);
        timer.classList.add('none');
    }
    
}

restart.addEventListener('click', () => {
    document.location.reload();
    form.reset();
});

answer.addEventListener('click',() => {
    restart.classList.add('none');
    answer.classList.add('none');
    form.classList.remove('none');
    btn50.classList.add('none');
    btn1.classList.add('none');
    close.classList.remove('none');
    const q1a = document.querySelector('#q1a');
    const q2a = document.querySelector('#q2a');
    const q3a = document.querySelector('#q3a');
    const q4a = document.querySelector('#q4a'); 
    q1a.setAttribute('id','qa');
    q2a.setAttribute('id','qa');
    q3a.setAttribute('id','qa');
    q4a.setAttribute('id','qa');
});

close.addEventListener('click', () => {
    window.close();
});