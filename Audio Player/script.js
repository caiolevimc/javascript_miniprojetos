window.banco = [
    {
        nome: 'Criminal - Britney Spears',
        img: './img/criminal-britney_spears.png',
        src: './audios/criminal-britney_spears.mp3'
    }
]

const player = document.querySelector('audio')
const buttons = document.querySelector('#buttons')

let isPlaying = false

const playerFunctions = event => {
    actions[event.target.id]()
}

const actions = {
    'play': function () {
        if (!isPlaying) {
            player.play()
            isPlaying = true
            this.changeIcon()
        } else {
            player.pause()
            isPlaying = false
            this.changeIcon()
        }
    },
    'next': function () { },
    'previous': function () { },
    'changeIcon': function () {
        if (document.querySelector('#play').classList.contains('fa-play')) {
            document.querySelector('#play').classList.remove('fa-play')
            document.querySelector('#play').classList.add('fa-pause')
        } else {
            document.querySelector('#play').classList.remove('fa-pause')
            document.querySelector('#play').classList.add('fa-play')
        }
    }
}

window.addEventListener('load', () => {
    player.src = banco[0].src

    buttons.addEventListener('click', playerFunctions)
})