let imgCoords: RSP[keyof RSP] = '0';

interface RSP {
  readonly ROCK: '0';
  readonly SCISSORS: '-142px';
  readonly PAPER: '-284px';
}

const rsp: RSP = {
  ROCK: '0',
  SCISSORS: '-142px',
  PAPER: '-284px'
};

const score = {
  ROCK: 0,
  SCISSORS: 1,
  PAPER: -1
} as const;

function computerChoice(imgCoords: RSP[keyof RSP]): keyof RSP {
  return (Object.keys(rsp) as ['ROCK', 'SCISSORS', 'PAPER']).find((k) => rsp[k] === imgCoords)!;
}

let interval: number;
document.querySelectorAll('.btn').forEach((btn) => {
  // this를 쓰는 경우에는 이벤트 핸들러 첫번째 인자에서 타이핑해야함
  btn.addEventListener('click', function (this: HTMLButtonElement) {
    clearInterval(interval);
    setTimeout(createInterval, 2000);

    // as 를 붙여서 타입을 제한함.
    const myChoice = this.textContent as keyof RSP;

    const myScore = score[myChoice];
    const computerScore = score[computerChoice(imgCoords)];
    const diff = myScore - computerScore;
    if (diff === 0) {
      console.log('draw');
    } else if ([-1, 2].includes(diff)) {
      console.log('win');
    } else {
      console.log('lost');
    }
  });
});

function createInterval() {
  interval = setInterval(function () {
    if (imgCoords === rsp.ROCK) {
      imgCoords = rsp.SCISSORS;
    } else if (imgCoords === rsp.SCISSORS) {
      imgCoords = rsp.PAPER;
    } else {
      imgCoords = rsp.ROCK;
    }

    const $computer = document.querySelector('#computer') as HTMLDivElement;
    $computer.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0}`;
  }, 100);
}
createInterval();
