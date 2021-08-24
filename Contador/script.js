let contador = 0;
const number = document.querySelector('#number')
const mais = document.querySelector('#mais')
const menos = document.querySelector('#menos')

window.addEventListener('load', () => {
    mais.addEventListener('click', () => {
        contador++;
        number.innerHTML = contador
    })
    menos.addEventListener('click', () => {
        contador--;
        number.innerHTML = contador
    })

})