let TOTAL_W = 0;

function getTotal() {
    let input = document.getElementById('value');
    let total = document.getElementById('total');

    const totalValue = input.value.split(",").map((x) => Number(x)).reduce((t, v) => t + v)

    if (Number.isNaN(totalValue) || !input.value) {
        alert('Please fill the form correctly!');
        total.innerHTML = "0"
        return;
    }

    total.innerHTML = totalValue;
}
