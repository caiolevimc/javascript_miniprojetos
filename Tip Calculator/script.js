const porcentRange = document.querySelector(".tip-porcent > input[type='range']")
const porcentNumber = document.querySelector(".tip-porcent > input[type='number']")
const money = document.querySelector("#money")
const tip = document.querySelector('.resultados>span+br+span')

window.addEventListener('load', () => {
    money.value = 0
    document.querySelector("#money+span").innerHTML = porcentRange.value + ' %'
    porcentNumber.value = parseInt(porcentRange.value)
    tip.innerHTML = 'R$ ' + (money.value * (parseInt(porcentRange.value) / 100)).toFixed(2)

    porcentRange.addEventListener('input', e => {
        document.querySelector("#money+span").innerHTML = e.target.value + ' %'
        porcentNumber.value = parseInt(e.target.value)
        tip.innerHTML = 'R$ ' + (money.value * (parseInt(e.target.value) / 100)).toFixed(2)
    })
    porcentNumber.addEventListener('change', e => {
        document.querySelector("#money+span").innerHTML = e.target.value + ' %'
        porcentRange.value = parseInt(e.target.value)
        tip.innerHTML = 'R$ ' + (money.value * (parseInt(e.target.value) / 100)).toFixed(2)
    })
    money.addEventListener('click', () => {
        if (money.value == 0)
            money.value = ''
    })
    money.addEventListener('change', () => {
        tip.innerHTML = 'R$ ' + (money.value * (parseInt(porcentRange.value) / 100)).toFixed(2)
    })
})
