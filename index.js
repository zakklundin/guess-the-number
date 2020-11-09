function randomInt(n){
    return Math.floor(Math.random() * n) + 1
}
//skapar en konstant variabel för 100 > n > 1 och loggar
const secretNumber = randomInt(100)
console.log(secretNumber)

//får värdet av användarens gissning
function getUserGuess(){
    let inputValue = document.getElementById("user-input").value
    return parseInt(inputValue, 10)
    //", 10"-delen menar att det ska tolkas i basen 10
}

//en funktion som kan ändra meddelandet som visas på hemsidan
function setMessage(msg){
    document.getElementById("message").innerText = msg
}

//en funktion som jämför gissningen och slump. nummer och skriver ett meddelande
function checkIfEquals(){
    if (secretNumber === getUserGuess()){
            setMessage("Correct!"), 
            document.getElementById("stats").innerText = "Number of guesses: " + (guesses.length + 1)
        } else if (secretNumber > getUserGuess()) {
            setMessage("Too low!")
        } else if (secretNumber < getUserGuess()){
            setMessage("Too high!")
    }
}

//en funktion som rensar input fältet
function clearInput(){
        document.getElementById("user-input").value = ""
}

//kör funktionen "checkIfEquals()" m.m. varje gång enter knappen trycks ned
document.addEventListener("keyup", function(a) {
    if (a.key === "Enter") {
        checkIfEquals()
        guesses.push(" " + getUserGuess())
        document.getElementById("gissningar").innerText = "Guesses: " + guesses
        clearInput()
    }
})

//försöker fördjupningen
const guesses = []
