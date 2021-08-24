let mili = 00;
let s = 00;
let min = 00;

let interval;

const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const milisegundos = document.querySelector('#mili');

const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

start.addEventListener('click', () => {
    interval = setInterval(startTimer, 10);
    console.log('começou')
})
pause.addEventListener('click', () => {
    clearInterval(interval);
    console.log('acabou')
})
reset.addEventListener('click', () => {
    clearInterval(interval);
    s = 00;
    min = 00;
    mili = 00;
    segundos.innerHTML = '00';
    minutos.innerHTML = '00';
    milisegundos.innerHTML = '00';
    console.log('resetou')
})

function startTimer() {
    mili++;
    if (mili < 10) {
        milisegundos.innerHTML = '0';
        milisegundos.innerHTML += mili;
    } else {
        if (mili == 100) {
            s++;
            mili = 00;
            if (s < 10) {
                segundos.innerHTML = '0';
                segundos.innerHTML += s;
            } else {
                if (s == 60) {
                    min++;
                    s = 00;
                    if (min < 10) {
                        minutos.innerHTML = '0';
                        minutos.innerHTML += min;
                    } else {
                        minutos.innerHTML = min
                    }
                }
                segundos.innerHTML = s
            }
        }
        milisegundos.innerHTML = mili
    }
}


