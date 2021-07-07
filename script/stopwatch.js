let second = document.getElementById("sec")
let milliSecond = document.getElementById("mili")
const start = document.getElementById("start")
const stp = document.getElementById("stop")
const reset = document.getElementById("reset")
const lap = document.getElementById("lap")
const lapContainer = document.querySelector(".lap")
const lapClear = document.getElementById("clear")
let progress = document.getElementById('progress')

let sec = 00; milli = 00;



function startCounter() {
    InterV = setInterval(()=> {
        milli++
        milliSecond.innerHTML = milli;
        proW = progress.offsetWidth;
        progress.style.width = (proW+17)+"px"
        if(milli>=99) {
            milli = 0
            sec++
            progress.style.width = 0;
            if(sec<10) {
                second.innerHTML = "0"+sec;
            }
            else {
                second.innerHTML = sec
            }
        }
        stp.addEventListener("click",()=> {
            clearInterval(InterV)
        })
        reset.addEventListener("click",()=>{
          clearInterval(InterV);
          second.innerHTML = "00"
          milliSecond.innerHTML = "00"
          progress.style.width =0
        })
    },10)
}