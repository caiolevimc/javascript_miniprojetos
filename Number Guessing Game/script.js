const startEnd = document.querySelector('#startEnd')
const status = document.querySelector('#number+h3')
const num = document.querySelector('#number')
const palpites = document.querySelectorAll('.palpite')
const buttons = document.querySelector('.buttons')
const pontucao = document.querySelector('#points>b')
const lastPontucao = document.querySelector('#points2>b')

let correto;
let jogando = false
let points = 0

const random = (max, min) => Math.trunc(Math.random() * max + min)

const dicidirCorreto = () => {
    num.innerHTML = 'X'
    const x = random(99, 0)
    correto = x
    console.log(correto)
}

const attButtons = () => {
    const i = random(palpites.length, 0)
    const numbers = []
    palpites.forEach((item, index) => {
        if (index == i) {
            item.innerHTML = correto
            numbers.push(correto)
        } else {
            let x = random(99, 0)
            while (numbers.indexOf(x) > -1) {
                x = random(99, 0)
            }
            if (numbers.indexOf(x) < 0) {
                item.innerHTML = x
                numbers.push(x)
            }
        }
    })
}

const startGame = () => {
    dicidirCorreto();
    attButtons();
    jogando = !jogando
    startEnd.innerHTML = 'Finalizar Jogo'
}

const continuarGame = e => {
    mostarResultado(e)
    setTimeout(() => {
        dicidirCorreto();
        attButtons();
        apagarResultado()
    }, 2500)
}

const endGame = () => {
    lastPontucao.innerHTML = points
    points = 0
    pontucao.innerHTML = points
    num.innerHTML = 'X'
    palpites.forEach(item => item.innerHTML = 'x')
    jogando = !jogando
    startEnd.innerHTML = 'Começar Jogo'
}

const verficar = e => {
    return (parseInt(e.target.innerHTML) == correto)
}

const mostarResultado = e => {
    num.innerHTML = correto
    if (verficar(e)) {
        status.classList.add('correto')
        status.innerHTML = 'CORRETO!'
        points += 1
        pontucao.innerHTML = points
    } else {
        status.classList.add('errado')
        status.innerHTML = 'ERRADO!'
    }

}

const apagarResultado = () => {
    status.classList.remove('correto')
    status.classList.remove('errado')
    status.innerHTML = ''
}

window.addEventListener('load', () => {
    startEnd.addEventListener('click', () => {
        if (jogando) {
            endGame()
        } else {
            startGame()
        }
    });
    buttons.addEventListener('click', continuarGame)
})