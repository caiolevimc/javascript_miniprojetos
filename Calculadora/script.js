const resultado = document.querySelector('#resultado')
const btnNumbers = document.querySelectorAll('.number')
const btnOperations = document.querySelectorAll('.operation')
const clear = document.querySelector('#clear')
const del = document.querySelector('#delete')
const equal = document.querySelector('#equal')
const point = document.querySelector('#point')

const operations = ['+', '-', '*', '/', '%']

const addNumber = e => {
    if (resultado.innerHTML === '0.0') {
        resultado.innerHTML = e.target.innerHTML
    } else {
        resultado.innerHTML += e.target.innerHTML
    }
}

const addOperation = e => {
    if (resultado.innerHTML !== '0.0') {
        if (!hasOperation()) {
            resultado.innerHTML += e.target.innerHTML
        } else {
            calcular()
            resultado.innerHTML += e.target.innerHTML
        }
    }
}

const hasOperation = () => {
    return operations.some(op => resultado.innerHTML.indexOf(op) > -1)
}

const whatOperation = () => {
    if (hasOperation()) {
        return operations.filter(op => resultado.innerHTML.indexOf(op) > -1)[0]
    } else {
        return null
    }
}

const pickN1 = () => {
    if (hasOperation()) {
        return parseFloat(resultado.innerHTML.slice(0, resultado.innerHTML.indexOf(whatOperation())))
    }
}
const pickN2 = () => {
    if (hasOperation()) {
        return parseFloat(resultado.innerHTML.slice(resultado.innerHTML.indexOf(whatOperation()) + 1))
    }
}

const calcular = () => {
    oper = whatOperation()
    n1 = pickN1()
    n2 = pickN2()

    switch (oper) {
        case '+': resultado.innerHTML = n1 + n2
            break
        case '-': resultado.innerHTML = n1 - n2
            break
        case '*': resultado.innerHTML = n1 * n2
            break
        case '/': resultado.innerHTML = n1 / n2
            break
        case '%': resultado.innerHTML = n1 % n2
            break
    }
}

window.addEventListener('load', () => {
    btnNumbers.forEach(item => item.addEventListener('click', addNumber))
    btnOperations.forEach(item => item.addEventListener('click', addOperation))
    del.addEventListener('click', () => resultado.innerHTML = resultado.innerHTML.slice(0, -1))
    clear.addEventListener('click', () => resultado.innerHTML = '0.0')
    equal.addEventListener('click', calcular)
    point.addEventListener('click', () => {
        if (resultado.innerHTML !== '0.0') {
            if (resultado.innerHTML.slice(-1) !== whatOperation()) {
                resultado.innerHTML += '.'
            }
        }
    })
})