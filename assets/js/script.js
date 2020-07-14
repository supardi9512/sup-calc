function insert(num) {
    document.getElementById("output-value").innerText = document.getElementById("output-value").innerText + num;
}

function equal() {
    let exp = document.getElementById("output-value").innerText;
    if(exp) {
        document.getElementById("output-value").innerText = eval(exp);
    }
}

function clean() {
    document.getElementById("output-value").innerText = "";
}

function back() {
    let exp = document.getElementById("output-value").innerText;
    document.getElementById("output-value").innerText = exp.substring(0, exp.length-1);
}