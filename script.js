let inputValue = document.getElementById("input-value");
let outputValue = document.getElementById("output-value");
let inputCoin = document.getElementById("input-coin");
let outputCoin = document.getElementById("output-coin");

// Invertendo os valores dos campos de entrada e saída;
function invertValues() {
    let firstValue = inputValue.value;
    let secondValue = outputValue.value;
    outputValue.value = firstValue;
    inputValue.value = secondValue;
}

// Convertendo valores;
async function ConvertValues() {
    
    const options = { method: 'GET', Headers: {accept: 'aapplication/json'}};
    const GetUrl = `https://api.fastforex.io/convert?api_key=a0216e4e5b-36dbbbdc32-t14bb0&from=${inputCoin.value}&to=${outputCoin.value}&amount=${inputValue.value}`;

    const response = await fetch(GetUrl, options);

    if (!response.ok) { console.log('Erro ao converter valor! ' + response.status); }

    const data = await response.json();
    const result = data.result;
    
    outputValue.value = result[`${outputCoin.value}`];
}