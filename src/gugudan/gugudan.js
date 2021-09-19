"use strict";
let numberOne = Math.ceil(Math.random() * 9);
let numberTwo = Math.ceil(Math.random() * 9);
let result = numberOne * numberTwo;
const word = document.createElement('div');
word.textContent = `${numberOne} x ${numberTwo} = ?`;
document.body.append(word);
const form = document.createElement('form');
document.body.append(form);
const input = document.createElement('input');
input.type = 'number';
form.append(input);
const button = document.createElement('button');
button.textContent = 'input';
form.append(button);
const resultDiv = document.createElement('div');
document.body.append(resultDiv);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (result === parseInt(input.value)) {
        resultDiv.textContent = 'O';
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        result = numberOne * numberTwo;
        word.textContent = `${numberOne} X ${numberTwo} = ?`;
    }
    else {
        resultDiv.textContent = 'X';
    }
    input.value = '';
    input.focus();
});
