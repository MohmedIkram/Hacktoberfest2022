let CSSsawals = [
    {
        q:1,
        ques: "CSS stand for ? ",
        op1: "Hyper Text Markup Language",
        op2: "Cascading Style Sheet",
        op3: "Hyper Text Makeup Language"
},
    {
        q:2,
        ques: " A valid CSS length unit? ",
        op1: "dm",
        op2: "cm",
        op3: "em"
},
    {
        q:3,
        ques: "NOT basic color keywords?",
        op1: "olive",
        op2: "cyan",
        op3: "aqua"
},
    {
        q:4,
        ques: "A valid media type?",
        op1: "tv",
        op2: "voice",
        op3: "print"
},
    {
        q:5,
        ques: "two generic font family values?",
        op1: "serif",
        op2: "sans-serif",
        op3: "monospace"
},
]


 
let anwers = ["Cascading Style Sheet","em","olive","print","sans-serif"];
// gloable variable
let currentItem = 0;
let win = 0;
// question number 
const question_numebr = document.querySelector('.question-number');
// question 
const sawal = document.querySelector('.question-para');
sawal.textContent = "HTML stand for ?";

const lb1 = document.getElementById("lab1");
const lb2 = document.getElementById("lab2");
const lb3 = document.getElementById("lab3");

const rd1 = document.getElementById("opt1");
const rd2 = document.getElementById("opt2");
const rd3 = document.getElementById("opt3");


const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const sbmBtn = document.querySelector(".submit-btn");

const lang = document.querySelector('.lang');
const span = document.querySelector('.span');



window.addEventListener('DOMContentLoaded',function(){
    showQuestions();
});
function showQuestions(){
    const Q = CSSsawals[currentItem];
    question_numebr.textContent = Q.q;
    sawal.textContent = Q.ques;
    lb1.textContent = Q.op1;
    lb2.textContent = Q.op2;
    lb3.textContent = Q.op3;
    rd1.value = Q.op1;
    rd2.value = Q.op2;
    rd3.value = Q.op3;
}

nextBtn.addEventListener("click",function(){
    
    const Q = CSSsawals[currentItem];
    if (currentItem > CSSsawals.length -1){
        alert("Quiz Questions Ended");
    }
    
    
        if (rd1.checked == true){
            if (rd1.value ==anwers[currentItem]){
                win +=10;
                // alert("im checked rd1"+rd1.value);
            }
        }
        else if (rd2.checked == true){
            if (rd2.value ==anwers[currentItem]){
                win +=10;
            }
        }
        else if (rd3.checked == true){
            if (rd3.value ==anwers[currentItem]){
                win +=10;
            }
        }
        currentItem ++;
        showQuestions();
    
   
    
    
});
prevBtn.addEventListener("click",function(){
   
    alert("sorry");
    
});
sbmBtn.addEventListener("click",()=>{
    // alert("your result is "+win);
    localStorage.setItem('result',win);
        
    window.open('result.html');
})
