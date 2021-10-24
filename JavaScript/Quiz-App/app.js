let sawals = [
    {
        q:1,
        ques: "HTML stand for ?",
        op1: "Hyper Text Markup Language",
        op2: "Hyper Text Market Language",
        op3: " Cascading Style Sheet"
},
    {
        q:2,
        ques: "Comments in HTML ",
        op1: "<!-- -->",
        op2: "//",
        op3: "#"
},
    {
        q:3,
        ques: "copyright symbol insertion",
        op1: "& #168",
        op2: "& #169",
        op3: "^ #169"
},
    {
        q:4,
        ques: "<tr> is use for ?",
        op1: "table in a row",
        op2: "Hyper Text Market Language",
        op3: "Hyper Text Makeup Language"
},
    {
        q:5,
        ques: "HTML stand for ?",
        op1: "Hyper Text Markup Language",
        op2: "Hyper Text Market Language",
        op3: "Hyper Text Makeup Language"
},
//     {
//         q:0,
//         ques: "SUBMIT YOUR QUIZ",
//         op1: "",
//         op2: "",
//         op3: ""
// },
]


 
let anwers = ["Hyper Text Markup Language","<!-- -->","& #169","Hyper Text Markup Language","Hyper Text Markup Language"];

// gloable variable
let currentItem = 0 ;
let win = 0 ;
// question number 
const question_numebr = document.querySelector('.question-number');
// question 
const sawal = document.querySelector('.question-para');
// sawal.textContent = "HTML stand for ?";

const lb1 = document.getElementById("lab1");
const lb2 = document.getElementById("lab2");
const lb3 = document.getElementById("lab3");

const rd1 = document.getElementById("opt1");
const rd2 = document.getElementById("opt2");
const rd3 = document.getElementById("opt3");

// const a = sawals[0];
// lb1.textContent = "Hyper Text Markup Language";
// lb2.textContent = a.op2;
// lb3.textContent = "Hyper Text Markup Language";



const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const sbmBtn = document.querySelector(".submit-btn");

const lang = document.querySelector('.lang');
const span = document.querySelector('.span');



window.addEventListener('DOMContentLoaded',function(){
    showQuestions();
    window.location('result.html');
location.href = 'result.html';
});
// let Q = sawals[currentItem];
function showQuestions(){
    const Q = sawals[currentItem];
    question_numebr.textContent = Q.q;
    sawal.textContent = Q.ques;
    lb1.textContent = Q.op1;
    lb2.textContent = Q.op2;
    lb3.textContent = Q.op3;
    rd1.value = Q.op1;
    rd2.value = Q.op2;
    rd3.value = Q.op3;
};

nextBtn.addEventListener("click",function(){
    
    const Q = sawals[currentItem];
    if (currentItem > sawals.length -1){
        // question_numebr.textContent = 0;
        // sawal.textContent = "Submit Quiz";
        // lb1.v
        // lb1.textContent = "";
        // lb2.textContent = "";
        // lb3.textContent = "";
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

    localStorage.setItem('result',win);
        
    window.open('result.html');
    
});
