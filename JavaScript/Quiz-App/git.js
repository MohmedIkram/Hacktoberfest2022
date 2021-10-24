let Gitsawals = [
    {
        q:1,
        ques: "Git is a ",
        op1: " Localized version control system",
        op2: "Distributed version control system",
        op3: "None"
},
    {
        q:2,
        ques: "What is full form of VCS? ",
        op1: "Version Consolidated Solutions",
        op2: "Version Configuration System",
        op3: "Version Control System"
},
    {
        q:3,
        ques: "staging all the changes ",
        op1: "git add",
        op2: "git commit add",
        op3: "git commit"
},
    {
        q:4,
        ques: "command that downloads repository",
        op1: "git fork",
        op2: "git clone",
        op3: "git push"
},
    {
        q:5,
        ques: " following is not related to git?",
        op1: "fork",
        op2: "stem",
        op3: "staging area"
},
]


 
let anwers = ["Distributed version control system","Version Control System","git add","git clone","stem"];
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
    const Q = Gitsawals[currentItem];
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
    
    const Q = Gitsawals[currentItem];
    if (currentItem > Gitsawals.length -1){
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
    // alert("your result is "+win);
    localStorage.setItem('result',win);
        
    window.open('result.html');
})
