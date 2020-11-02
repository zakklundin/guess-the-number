function randomInt(n){
    return Math.floor(Math.random() * n) + 1
}
console.log(randomInt(100))

function getUserGuess(){
    const inputValue = document.getElementById("user-input").value
    return parseInt(inputValue, 10)
    //", 10" menar att det ska tolkas i basen 10
}
document.addEventListener("keyup", function (a){
    if (a.key === "Enter") {
        const theGuess = getUserGuess()
        console.log(theGuess)
    }
})
