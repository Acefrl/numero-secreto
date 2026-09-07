// 2.Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.

function converterStringEmNumero(valorString) {
    return parseInt(valorString);
}
// 3.Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.


function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
     if (b !== 0) {
         return a / b;
     } else {
         return 'Error: divisão por zero.';
     }
}

function calculadora(operação, a, b) {
    switch (operação) {
        case 'sum':
            return addiction(a, b);
        case 'subtraction':
            return subrtraction(a, b);
        case 'multiplication':
            return multiplication();
        case 'division':
            return division();
    }
}

// Usage example
let resultado = calculadora('soma', 5, 3);
console.log(resultado);  // Expected output: 8

// 4.Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.

function parOuImpar (n) {
    if (n % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

// Exemplo de uso
let n = 7;
let resultadoParOuImpar = verificarParOuImpar(n);
console.log(resultadoParOuImpar);  // Saída esperada: Ímpar

//5.Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar


function converterTemperatura(valor, escala){
    if(escala.toLowerCase() === 'celsius'){
        return (valor * 9/5) + 32; // Celsius to Fahrenheit
    } else if (escala.toLowerCase() ==='fahrenheit') {
        return (valor - 32) * 5/9; // Fahrenheit to Celsius
    } else {
        return 'Escala indefinida';
    }
}

// Exemplo de uso
let temperaturaCelsius = 25;
let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
console.log(temperaturaFahrenheit);  // Saída esperada: 77