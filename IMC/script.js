const submit = document.querySelector('#submit')
const reset = document.querySelector("input[type='reset']")
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const imc = document.querySelector('#imc')
const tbs = document.querySelectorAll('.tb')

submit.addEventListener('click', event => {
    event.preventDefault()
})

submit.addEventListener('click', () => {
    if (!(altura.value == '') || !(peso.value == '')) {
        desmarkStatus()
        imc.innerHTML = calcularIMC().toFixed(3)
        markStatus()
    } else {
        alert('Insira os valores adequados')
    }
})

reset.addEventListener('click', () => {
    desmarkStatus()
    imc.innerHTML = '0.0'
})

const calcularIMC = () => {
    return peso.value / (altura.value * altura.value)
}

const markStatus = () => {
    tbs[status()].classList.add('stats')
}

const desmarkStatus = () => {
    for (let tb of tbs) {
        tb.classList.remove('stats')
    }
}

const status = () => {
    let imc = calcularIMC()
    if (imc < 18.5)
        return 0
    else if (imc >= 18.5 && imc <= 24.9)
        return 1
    else if (imc >= 25 && imc <= 29.9)
        return 2
    else if (imc >= 30 && imc <= 39.9)
        return 3
    else if (imc >= 40)
        return 4
}