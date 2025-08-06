let inputCoin = document.getElementById("input-coin");
let inputValue = document.getElementById("input-value");
let outputCoin = document.getElementById("output-coin");
let outputValue = document.getElementById("output-value");

// Invertendo os valores dos campos de entrada e saída;
function invertValues() {
    let firstValue = inputValue.value;
    let secondValue = outputValue.value;
    secondValue = firstValue;
    firstValue = secondValue;
}