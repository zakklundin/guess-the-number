function randomInt(n){
    return Math.floor(Math.random() * n) + 1
}

const secretNumber = randomInt(100)
console.log(secretNumber)

function getUserGuess(){
    let inputValue = document.getElementById("user-input").value
    return parseInt(inputValue, 10)
    //", 10"-delen menar att det ska tolkas i basen 10
}

document.addEventListener("keyup", function (a){
    if (a.key === "Enter") {
        if (secretNumber === getUserGuess()){
            setMessage("Correct!")
        } else if (secretNumber > getUserGuess()) {
            setMessage("Too low!")
        } else if (secretNumber < getUserGuess()){
            setMessage("Too high!")
        }
        document.getElementById("user-input").value = ""
        }
})

function setMessage(msg){
    document.getElementById("message").innerText = msg
}
