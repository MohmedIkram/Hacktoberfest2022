// Variables
const hour = document.querySelector(".clock__hand--hour");
const min = document.querySelector(".clock__hand--minute");
const second = document.querySelector(".clock__hand--second");

const hourDigital = document.querySelector(".digital__hour");
const minDigital = document.querySelector(".digital__min");
const secondDigital = document.querySelector(".digital__sec");
const infoDigital = document.querySelector(".digital__info");

const selectClock = document.querySelector("select");

// Event Listeners
selectClock.addEventListener("click", clockSelect);

// Functions
function setTime() {
    const time = new Date();    

    const secHand = time.getSeconds();
    secDegree = ((secHand / 60) * 360) + 90;
    second.style.transform = `rotate(${secDegree}deg)`;
    
    const minHand = time.getMinutes();
    minDegree = (((minHand + (secHand / 60)) / 60) * 360) + 90;
    min.style.transform = `rotate(${minDegree}deg)`;

    const hourHand = time.getHours();
    hourDegree = (((hourHand + (minHand / 60) + (secHand / 3600)) / 12) * 360) + 90;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}

function setDigitalInfo() {
    // Sets the AM/PM Status per second
    const time = new Date();
    
    let hourHand = time.getHours();

    if (hourHand < 12) {
        infoDigital.innerHTML = "AM";
    } else {
        infoDigital.innerHTML = "PM";
    }    
}

function setDigitalTime() {    
    let time = new Date(); 

    let secHand = time.getSeconds();    
    let minHand = time.getMinutes();  

    secHand = secHand.toString();
        if (secHand.length < 2) {
            secHand = "0"+secHand;
        }
        secondDigital.innerHTML = secHand;

    minHand = minHand.toString();
    if (minHand.length < 2) {
        minHand = "0"+minHand;
    }
    minDigital.innerHTML = minHand;
}

function clockSelect() {        
    let time = new Date(); 
    let selectValue = selectClock.value; 
    let hourHand = time.getHours();

    if (selectValue === "am-pm") {
        //  Checks if the clock is on the AM/PM
        infoDigital.classList.add("digital__info--visible");
        //  Displays the AM/PM Block
        setDigitalInfo();

        if (hourHand > 12) {
            // Calculates the corresponding pm time
            hourHand -= 12;
            hourHand = hourHand.toString();
            if (hourHand.length < 2) {
                hourHand = "0"+hourHand;
            }
            hourDigital.innerHTML = hourHand;
        }
        
       setDigitalTime();
    } else if (selectValue === "digital") {
        infoDigital.classList.remove("digital__info--visible");
        
        if (hourHand < 12) {
            hourHand = hourHand.toString();
            if (hourHand.length < 2) {
                hourHand = "0"+hourHand;
            }
            hourDigital.innerHTML = hourHand;
        } else {
            if (hourHand.length < 2) {
                hourHand = "0"+hourHand;
            }
            hourDigital.innerHTML = hourHand;
        }

        setDigitalTime();
    }
}

setTime();
clockSelect();

setInterval(setTime, 1000);
setInterval(clockSelect, 1000);