let inputValue = document.getElementById("input-value");
let outputValue = document.getElementById("output-value");

// Invertendo os valores dos campos de entrada e saída;
function invertValues() {
    let firstValue = inputValue.value;
    let secondValue = outputValue.value;
    outputValue.value = firstValue;
    inputValue.value = secondValue;
}

