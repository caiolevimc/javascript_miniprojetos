const submit = document.querySelector("input[type='submit']")
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const restart = document.querySelector('#restart')
const inHoras = document.querySelector('#inHoras')
const inMinutos = document.querySelector('#inMinutos')
const inSegundos = document.querySelector('#inSegundos')
const spanHora = document.querySelector('#spanHora')
const spanMin = document.querySelector('#spanMin')
const spanSeg = document.querySelector('#spanSeg')

let seg = 0;
let min = 0;
let hora = 0;
window.intervalo = undefined;
window.isPlaying = false;
window.memoria = []

const inputValues = () => {
    seg = parseInt(inSegundos.value)
    min = parseInt(inMinutos.value)
    hora = parseInt(inHoras.value)
    memoria = [hora, min, seg]
    attSpan()
}

const attSpan = () => {
    spanHora.innerHTML = hora < 10 ? '0' + hora : hora
    spanMin.innerHTML = min < 10 ? '0' + min : min
    spanSeg.innerHTML = seg < 10 ? '0' + seg : seg
}

const temporizador = () => {
    if (seg == 0 && min == 00 && hora == 0) {
        pausar()
    } else {
        seg--
        if (seg < 0) {
            min--
            seg = 59
            if (min < 0) {
                hora--
                min = 59
            }
        }
        attSpan()
        isPlaying = true
    }

}

const pausar = () => {
    clearInterval(intervalo)
    isPlaying = false
}

const recomecar = () => {
    pausar()
    spanHora.innerHTML = memoria[0] < 10 ? '0' + memoria[0] : memoria[0]
    spanMin.innerHTML = memoria[1] < 10 ? '0' + memoria[1] : memoria[1]
    spanSeg.innerHTML = memoria[2] < 10 ? '0' + memoria[2] : memoria[2]
    hora = memoria[0]
    min = memoria[1]
    seg = memoria[2]
}

window.addEventListener('load', () => {
    submit.addEventListener('click', e => e.preventDefault())
    inSegundos.addEventListener('input', () => {
        // if (inSegundos.value < 10 && inSegundos.value > 0) {
        //     inSegundos.value = '0' + inSegundos.value
        // }
        if (inSegundos.value < 0) {
            inSegundos.value = 59
        }
        if (inSegundos.value > 59) {
            if (inMinutos.value < 9) {
                inMinutos.value = '0' + ++inMinutos.value
            }
            inSegundos.value = '00'
        }
    })

    inMinutos.addEventListener('input', () => {
        // if (inMinutos.value < 10 && inMinutos.value > 0) {
        //     inMinutos.value = '0' + inMinutos.value
        // }
        if (inMinutos.value < 0) {
            inMinutos.value = 59
        }
        if (inMinutos.value > 59) {
            if (inHoras.value < 9) {
                inHoras.value = '0' + ++inHoras.value
            }
            inMinutos.value = '00'
        }
    })
    inHoras.addEventListener('input', () => {
        // if (inHoras.value < 10 && inHoras.value > 0) {
        //     inHoras.value = '0' + inHoras.value
        // }
        if (inHoras.value < 0) {
            inHoras.value = 23
        }
    })

    submit.addEventListener('click', inputValues)
    start.addEventListener('click', () => {
        if (!isPlaying) {
            intervalo = setInterval(temporizador, 1000);
        }
    })
    pause.addEventListener('click', pausar)
    restart.addEventListener('click', recomecar)
})