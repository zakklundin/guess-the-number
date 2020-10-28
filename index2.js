
let chosenLetters = []
const word = 'BOLL'
const MAX_TRIES = word.length + 3

let triesLeft = MAX_TRIES

function maskLetter(letter) {
    if (chosenLetters.includes(letter)) {
        return letter
    } else {
        return '_'
    }
}

function maskWord(str) {
    return str
        .split('')
        .map(maskLetter)
        .join(' ')
}

function render() {
    document.getElementById('word').innerText = maskWord(word)
    document.getElementById('letters').innerText = chosenLetters
    
    if (hasWon()) {
        document.body.style.backgroundColor = 'green'
    } else if (gameOver()) {
        document.body.style.backgroundColor = 'red'
    }
}

function isLetter(char) {
    return char.toUpperCase() !== char.toLowerCase()
}

function hasWon() {
    return word.split('').every(ch => chosenLetters.includes(ch))
}

function gameOver() {
    return triesLeft === 0
}

render()

function resetGame() {
    chosenLetters = []
    triesLeft = MAX_TRIES
    render()
}

document.body.addEventListener('keyup', (ev) => {
    if (!isLetter(ev.key)) {
        console.log(`${ev.key} is not a letter`)
        return
    }

    if (chosenLetters.includes(ev.key.toUpperCase())) {
        console.log(`${ev.key} is already chosen.`)
        return
    }

    chosenLetters.push(ev.key.toUpperCase())

    triesLeft = triesLeft - 1

    console.log(`Tries left: ${triesLeft}`)

    render()

    // if(hasWon() || gameOver()) {
    //     resetGame()
    // }
})
