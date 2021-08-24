const img = document.querySelector('#img');
const buttons = document.querySelector('#buttons');
let colorIndex = 0;
let intervalID = null;

const trafficLight = event => {
    stopAuto();
    turnOn[event.target.id]();
}

const colorChange = () => {
    const cores = ['red', 'yellow', 'green'];
    turnOn[cores[colorIndex]]()
    nextIndex();
}

const nextIndex = () => {
    colorIndex == 2 ? colorIndex = 0 : ++colorIndex;
}

const stopAuto = () => {
    clearInterval(intervalID)
}

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'auto': () => intervalID = setInterval(colorChange, 800)
}

buttons.addEventListener('click', trafficLight);