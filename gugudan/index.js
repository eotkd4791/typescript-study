var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var result = numberOne * numberTwo;
var word = document.createElement('div');
word.textContent = numberOne + " x " + numberTwo + " = ?";
document.body.append(word);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
input.type = 'number';
form.append(input);
var button = document.createElement('button');
button.textContent = 'input';
form.append(button);
var resultDiv = document.createElement('div');
document.body.append(resultDiv);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (result === parseInt(input.value)) {
        resultDiv.textContent = 'O';
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        result = numberOne * numberTwo;
        word.textContent = numberOne + " X " + numberTwo + " = ?";
    }
    else {
        resultDiv.textContent = 'X';
    }
    input.value = '';
    input.focus();
});
