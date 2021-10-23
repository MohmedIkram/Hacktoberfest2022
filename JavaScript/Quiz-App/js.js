let Jssawals = [
    {
        q:1,
        ques: "Js stand for ? ",
        op1: "Hyper Text Markup Language",
        op2: "Cascading Style Sheet",
        op3: "Java Script"
},
    {
        q:2,
        ques: "Expression Funciton: ",
        op1: "const ab =;",
        op2: "const =();",
        op3: "const ab =();"
},
    {
        q:3,
        ques: "type of JavaScript language is ?",
        op1: "Object-Oriented",
        op2: "Object-Based",
        op3: "High-level"
},
    {
        q:4,
        ques: "JavaScript ignores?",
        op1: "spaces",
        op2: "tabs",
        op3: "All of the above"
},
    {
        q:5,
        ques: "ternary operator in JavaScript?",
        op1: "#",
        op2: "::",
        op3: "?"
},
]


 
let anwers = ["Java Script","const ab =();","Object-Oriented","All of the above","?"];

let currentItem = 0;

let win = 0;

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
});
// let Q = sawals[currentItem];
function showQuestions(){
    const Q = Jssawals[currentItem];
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
    
    const Q = Jssawals[currentItem];
    if (currentItem > Jssawals.length -1){
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
// let ele = document.querySelector('input[type="radio"]:checked');
// console.log(ele.lab1.textContent);
prevBtn.addEventListener("click",function(){
    // currentItem --;
    // if (currentItem < 0){
    //     currentItem = sawals.length -1;
    // }
    // showQuestions();
    alert("sorry");
    
});
sbmBtn.addEventListener("click",()=>{
    // alert("your result is "+win);
    localStorage.setItem('result',win);
        
    window.open('result.html');
})
