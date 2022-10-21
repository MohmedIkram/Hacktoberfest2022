// UI vars
const amount = document.querySelector("#amount");
const interest = document.querySelector("#interest");
const years = document.querySelector("#years");
const monthlyPayment = document.querySelector("#monthly-payment");
const totalPayment = document.querySelector("#total-payment");
const totalInterest = document.querySelector("#total-interest");

// HTML elements
const card = document.querySelector(".card");
const heading = document.querySelector(".heading");
const loader = document.querySelector("#loading");
const results = document.querySelector("#results");

// Listen for submit
const loanForm = document.querySelector("#loan-form");
loanForm.addEventListener("submit", function(e){
    results.style.display = "none";
    loader.style.display = "block";
    setTimeout(calculateResults, 2000);
    e.preventDefault();
});


function calculateResults(){
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        results.style.display = "block";
        loader.style.display = "none";
    } else {
        showError("Please check your numbers");
    }
}

// Show error
function showError(error){
    results.style.display = "none";
    loader.style.display = "none";
    const errorDiv = document.createElement("div");
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);
    setTimeout(clearError, 3000);
}

// Clear error
function clearError(){
    document.querySelector(".alert").remove();
}