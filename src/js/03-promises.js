import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const refs = {
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  buttonEl: document.querySelector('button[type="submit"]'),
};
refs.buttonEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  event.preventDefault();

  const { delayEl, stepEl, amountEl } = refs;

  const amount = Number(amountEl.value);
  const step = Number(stepEl.value);
  let delay = Number(delayEl.value);

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    createPromise(position, delay)
      // Fulfill
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      // Reject
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}
