function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

let timer = null;

ref.btnStart.addEventListener('click', onBtnStartClick);
ref.btnStop.addEventListener('click', onBtnStopClick);

defaultBtnState();

function defaultBtnState() {
  ref.btnStop.disabled = true;
  ref.btnStart.disabled = false;
}

function reverseBtnState() {
  ref.btnStop.disabled = false;
  ref.btnStart.disabled = true;
}

function onBtnStartClick() {
  timer = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  reverseBtnState();
  
  console.log(timer);
}

function onBtnStopClick() {
  clearInterval(timer);
  defaultBtnState();
}
