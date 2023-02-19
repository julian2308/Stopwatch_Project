let minutes = 0;
let seconds = 0;
let hours = 0;
let counterTime = document.getElementById("hour");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
let intervalId;

const showHour = () => {
  counterTime.innerHTML = `${hours <= 9 ? "0" + hours : hours}:${
    minutes <= 9 ? "0" + minutes : minutes
  }:${seconds <= 9 ? "0" + seconds : seconds}`;
};

showHour();

const plusAnHour = () => {
  hours++;
};

const countStart = () => {
  intervalId = setInterval(countSeconds, 1000);
};

const countStop = () => {
  clearInterval(intervalId);
};

const countReset = () => {
  countStop();
  seconds = 0;
  minutes = 0;
  showHour();
};

const countSeconds = () => {
  seconds++;
  if (seconds > 59) {
    seconds = 0;
    countMinutes();
  }
  showHour();
};

const countMinutes = () => {
  minutes++;
  if (minutes > 59) {
    minutes = 0;
    plusAnHour();
  }
  showHour();

  hours > 59 ? countReset : null;
};

startBtn.addEventListener("click", countStart);
stopBtn.addEventListener("click", countStop);
resetBtn.addEventListener("click", countReset);
