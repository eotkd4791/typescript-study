export {};
const { body } = document;
let candidate: number[];
let array: number[] = [];

// 타입추론 잘 활용하기
function chooseNumber() {
  candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
}

chooseNumber();
console.log(array);

const result = document.createElement('h1');
body.append(result);
const form = document.createElement('form');
document.body.append(form);
const input = document.createElement('input');
input.type = 'text';
input.maxLength = 4;
form.append(input);
const button = document.createElement('button');
button.textContent = '입력';
form.append(button);

let wrongCount: number = 0;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const answer = input.value;
  if (answer === array.join('')) {
    result.textContent = '홈런';
    input.value = '';
    input.focus();
    chooseNumber();
    wrongCount = 0;
  } else {
    const answerArray = answer.split('');
    let strike = 0;
    let ball = 0;
    wrongCount += 1;
    if (wrongCount > 10) {
      result.textContent = `10번 넘게 틀려서 실패!\n 답은 ${array.join(',')} 였습니다!`;
      input.value = '';
      input.focus();
      chooseNumber();
      wrongCount = 0;
    } else {
      console.log('답이 틀렸습니다.', answerArray);
      for (let i: number = 0; i <= 3; i += 1) {
        if (Number(answerArray[i]) === array[i]) {
          strike += 1;
        } else if (array.indexOf(Number(answerArray[i])) > -1) {
          ball += 1;
        }
      }
      result.textContent = `${strike}스트라이크 ${ball}볼입니다.`;
      input.value = '';
      input.focus();
    }
  }
});
