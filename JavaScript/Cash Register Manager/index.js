const billAmount = document.querySelector("#billAmount");
// console.log(billAmount.value);
// alert("hello");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const msg = document.querySelector("#error-msg");
const noOfNotes=document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function hideMessage() {
  msg.style.display = "none";

}

function displayMsg(message) {
  msg.style.display = "block";
  msg.innerText = message;
}

function calculateChange(amountToReturned)
 {
  for (let i = 0; i < availableNotes.length; i++)
   {
    const numberOfNotes = Math.trunc(amountToReturned / availableNotes[i]);
    amountToReturned = amountToReturned%availableNotes[i];
noOfNotes[i].innerText=numberOfNotes;
console.log(noOfNotes[i]);
  }

}


checkBtn.addEventListener("click", function validateBillAndCashAmount()
 {

// console.log(billAmount.value);
// console.log(cashGiven.value);
// // console.log("hello");
  hideMessage();
  if (billAmount.value > 0)
  {
    if (Number(cashGiven.value) >= Number(billAmount.value))
     {
       // console.log("good")
       console.log(billAmount.value);
       console.log(cashGiven.value);
      const amountToReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToReturned);

    }
    else
     {
       console.log(billAmount.value);
       console.log(cashGiven.value);
      displayMsg("The cash provided should be atleast be equal to the bill Amount");
    }
    // message.innerText="The bill amount is positive";
  }
   else
  {
    displayMsg("Invalid Bill Amount");
  }
});
