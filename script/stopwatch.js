let second = document.getElementById("sec");
let milliSecond = document.getElementById("mili");
let minute = document.getElementById("min");
const start = document.getElementById("start");
const stp = document.getElementById("stop");
const reset = document.getElementById("reset");
const lap = document.getElementById("lap");
const lapContainer = document.querySelector(".lap");
const lapClear = document.getElementById("clear");
let lapCounter = 0;
let sec = 00;
milli = 00;
min = 00;


function startCounter() {
    InterV = setInterval(() => {
      milli++;
      if (milli < 10) {
        milliSecond.innerHTML = `0${milli}`;
      } else {
        milliSecond.innerHTML = milli;
      }
      if (milli >= 99) {
        milli = 0;
        sec++;
        if (sec < 10) {
          second.innerHTML = `0${sec}`;
        } else {
          second.innerHTML = sec;
        }
      }
      if (sec > 59) {
        sec = 00;
        min++;
        if (min < 10) {
          minute.innerHTML = `0${min}`;
        } else {
          minute.innerHTML = min;
        }
      }
      stp.addEventListener("click", () => {
        clearInterval(InterV);
      });
      reset.addEventListener("click", () => {
        clearInterval(InterV);
        sec = 0;
        milli = 0;
        min = 0;
        second.innerHTML = "00";
        milliSecond.innerHTML = "00";
        minute.innerHTML = "00";
      });
    }, 10);
  }
  
  start.addEventListener("click", startCounter);
  
  lap.addEventListener("click", () => {
    lapCounter++;
    let secSplit = second.innerText;
    let millSplit = milliSecond.innerHTML;
    let minSplit = minute.innerHTML;
  
    let lapItem = document.createElement("li");
    let lapSpan = document.createElement("small");
    let itemSpan = document.createElement("span");
  
    lapSpan.innerHTML = `lap ${lapCounter}`;
    itemSpan.innerHTML = `${minSplit}:${secSplit}:${millSplit}`;
    lapItem.appendChild(lapSpan);
    lapItem.appendChild(itemSpan);
    lapContainer.appendChild(lapItem);
  });
  
  lapClear.addEventListener("click", () => {
    lapContainer.innerHTML = " ";
    lapCounter = 0;
  });
  