let inputValue = document.getElementById("input-value");
let outputValue = document.getElementById("output-value");
let inputCoin = document.getElementById("input-coin");
let outputCoin = document.getElementById("output-coin");
let titlebtn = document.getElementById('title-btn');
let loadspinner = document.getElementById('loader');

Alert();

loadspinner.style.display = 'none';

// Invertendo os valores dos campos de entrada e saída;
function invertValues() {
    let firstValue = inputValue.value;
    let secondValue = outputValue.value;
    outputValue.value = firstValue;
    inputValue.value = secondValue;
}

// Convertendo valores;
async function ConvertValues() {
    titlebtn.style.display = 'none';
    loadspinner.style.display = 'inline-block';

    let value = parseFloat(inputValue.value);
    const options = { method: 'GET', Headers: {accept: 'aapplication/json'}};
    const GetUrl = `https://api.fastforex.io/convert?api_key=a0216e4e5b-36dbbbdc32-t14bb0&from=${inputCoin.value}&to=${outputCoin.value}&amount=${value}`;

    if (!value) {
        alert(`Insira um número válido de entrada!`);
        loadspinner.style.display = 'none';
        titlebtn.style.display = 'block';
    }

    const response = await fetch(GetUrl, options);

    if (!response.ok) {
        console.log('Erro ao converter valor! ' + response.status);
        alert('Erro ao converter valor! Tente novamente mais tarde!');
    }

    const data = await response.json();
    const result = data.result;
    
    outputValue.value = result[`${outputCoin.value}`];

    loadspinner.style.display = 'none';
    titlebtn.style.display = 'block'
}

// Alerta;
function Alert() {
    const alert = document.createElement('div');

    alert.className = 'alert';
    alert.innerHTML = `
    <p>ATENÇÃO!</p>
    <p>Use '.' ao invés de ',' para a conversão correta do valor inserido!</p>`;

    document.body.insertBefore(alert, document.body.firstChild);

    setTimeout(() => {
        alert.style.backgroundColor = 'rgb(0, 0, 0)';
        alert.style.color = 'rgb(255, 255, 255)';
    }, 1000);

    setTimeout(() => {
        alert.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        alert.style.color = 'rgba(255, 255, 255, 0)';
        setTimeout(() => {
            alert.remove();
        }, 7000);
    }, 6000);
}