let btns = document.querySelectorAll(".btn");
let input = document.querySelector(".input");
let container = document.querySelector(".container");
const toggle = document.getElementById('mode');
toggle.addEventListener('change', (event) => {
    document.body.classList.toggle('dark', event.target.checked);
    // document.input.classList.toggle('dark2', event.target.checked);
});

function toast(str) {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    container.appendChild(notif);
    notif.innerText = str;
    setTimeout(() => { notif.remove(); }, 1000);
}
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        ctr = btns[i].innerHTML;
        set(ctr);
    })
}
document.addEventListener("keydown", function(element) {
    if (check(element.key)) {
        set(element.key);
    }
});

function check(key) {
    if (key == 'C' || key == 'c' || key == "Backspace" || key == '/' || key == '*' || key == '-' || key == '+' || key == '=' || key == 'Enter' || key == '7' || key == '8' || key == '9' || key == '4' || key == '5' || key == '6' || key == '1' || key == '2' || key == '3' || key == '0' || key == '.') {
        return true;
    } else {
        toast("Invalid Entry");
    }
}
var enter = false;
var op = true;

function set(ctr) {
    if (ctr == 'c' || ctr == 'C') {
        input.value = "";
        op = true;

    } else if (ctr == '=' || ctr == 'Enter') {
        let ans = eval(input.value);
        input.value = ans;
        if (ans % 1 === 0) {
            op = true;
        } else {
            op = false;
        }
        enter = true;

    } else if (ctr == 'Backspace' || ctr == '⌫') {
        let str = input.value;
        if (str[str.length - 1] == '.') {
            op = true;

        }
        if (str[str.length - 1] == '+' || str[str.length - 1] == '-' || str[str.length - 1] == '/' || str[str.length - 1] == '*') {
            input.value = str.substring(0, str.length - 1);
            if (eval(input.value) % 1 === 0) {
                op = true;

            } else {
                op = false;
            }
            return;
        }
        input.value = str.substring(0, str.length - 1);

    } else if (ctr == '.') {
        if (op && input.value[input.value.length - 1] != '.') {
            input.value += ctr;
            op = false;
        } else {
            toast("Decimal point can be used once");
            return;

        }
        enter = false;
    } else if (ctr == '/' || ctr == '*' || ctr == '-' || ctr == '+') {
        op = true;
        let istr = input.value;
        let lastkey = istr[istr.length - 1];

        if (lastkey == '/' || lastkey == '*' || lastkey == '-' || lastkey == '+' || lastkey == '.') {
            toast("Enter a number after Operator");
            return;
        }
        input.value += ctr;
        enter = false;
    } else {
        if (enter == true) {
            input.value = ctr;
            op = true;
        } else {
            input.value += ctr;
        }
        enter = false;
    }
}