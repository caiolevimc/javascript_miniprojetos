

const medidas = {
    'temperatura': {
        'unidades': ['fahrenheit', 'celsius', 'kelvin'],
        'conversao': function () {
            switch (unidade1.value) {
                case 'fahrenheit':
                    return unidade2.value === 'celsius' ? (entrada.value - 32) * (5 / 9) : ((entrada.value - 32) * (5 / 9)) + 273.15
                    break;
                case 'celsius':
                    return unidade2.value === 'fahrenheit' ? (entrada.value * 1.8) + 32 : entrada.value + 273.15
                    break;
                case 'kelvin':
                    return unidade2.value === 'fahrenheit' ? (entrada.value - 273.15) * 1.8 + 32 : entrada.value - 273.15
                    break;
            }
        }
    },
    'comprimento': {
        'unidades': ['kilometro', 'hecmetro', 'decametro', 'metro', 'decimetro', 'centimetro', 'milimetro'],
        'isMetrica': x => {
            const metrica = ['kilometro', 'hecmetro', 'decametro', 'metro', 'decimetro', 'centimetro', 'milimetro']
            return metrica.indexOf(x) > -1 ? true : false
        },
        'conversao': function () {
            if ((this.isMetrica(unidade1.value)) && (this.isMetrica(unidade2.value))) {
                let pot = this.unidades.indexOf(unidade2.value) - this.unidades.indexOf(unidade1.value)
                return entrada.value * Math.pow(10, pot)
            }
        }
    }
}

const medida = document.querySelector('#seletor__medidas>select')
const unidade1 = document.querySelector('#seletor__unidades>#unidade1')
const unidade2 = document.querySelector('#seletor__unidades>#unidade2')
const entrada = document.querySelector('#entrada')
const saida = document.querySelector('#saida')

const attUnidades = event => {

}

const criarOptions = unidades => {
    document.querySelectorAll('#seletor__unidades>select').forEach(select => {
        unidades.forEach(item => {
            let op = document.createElement('option')
            op.value = item
            op.innerHTML = item[0].toUpperCase() + item.slice(1)
            select.appendChild(op)
        })
    })
}

medida.addEventListener('change', event => criarOptions(medidas[event.target.value].unidades))
entrada.addEventListener('change', event => {
    saida.value = medidas[medida.value].conversao()
})