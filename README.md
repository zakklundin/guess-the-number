# Guess the Number

## Innan du börjar
**I den här uppgiften ska du bygga ut en sida där man gissar efter ett nummer.** Du kanske har gjort en liknande uppgift förut, men strunt samma. Nu kör vi igen!

- Börja med att starta *Go Live* och kolla in sidan i nuläget.
- Kolla igenom `index.html`. Vilka element finns och vad har de för id:n?
- Pusha till ditt github-repo efter varje framsteg

## Uppgifter för alla

### 1. Generera ett hemligt random tal
Vi börjar genom att skapa en funktion som genererar slumpmässiga heltal.
Skriv en funktion `randomInt()` som returnerar ett **heltal mellan 0 och 100**. (*int* syftar på *integer* vilket betyder heltal)

Kom ihåg att testa, t.ex. såhär:
````javascript
    console.log(randomInt()) // 15
    console.log(randomInt()) // 3
    console.log(randomInt()) // 9
    console.log(randomInt()) // 17
    console.log(randomInt()) // 8
````

<details>
<summary>Ledtråd 1</summary>

````javascript
    Math.random()      // Decimaltal mellan 0 och 0.9999999
    Math.random() * 10 // Decimaltal mellan 0 och 9.9999999
````
</details>
<details>
<summary>Ledtråd 2</summary>

````javascript
    Math.floor(8.723) // 8
    Math.floor(4.723) // 4
    Math.floor(0.723) // 0
````
</details>
<details>
<summary>Ledtråd 3</summary>

````javascript
    Math.floor(Math.random() * 10) // Vad ger detta?
````
</details>
<details>
<summary>Fördjupning</summary>

Skriv istället `randomInt(n)` som returnerar ett heltal mellan 0 och **n**.
</details>

Skapa en global variabel `secretNumber` och sätt värdet till random tal med hjälp av funktionen du just skapat.

### 2. Hämta ut användarens gissning
Nästa steg blir att skapa en funktion som returnerar det nummer som användaren skrivit i input-fältet. Kalla den `getUserGuess`.

<details>
<summary>Ledtråd 1</summary>

Använd `document.getElementById('user-input').value`
</details>
<details>
<summary>Ledtråd 2</summary>

Du behöver använda den inbyggda funktionen `parseInt(x)` för att översätta `string` till `number`.
</details>

<details>
<summary>Ledtråd 3 (lösning)</summary>

````javascript
function getUserGuess() {
    const stringValue = document.getElementById('user-input').value
    return parseInt(stringValue, 10)
}
````
</details>

Testa att den fungerar innan du fortsätter!

### 3. Hämta ut värdet när användaren trycker på Enter
Vi har inga knappar på den här sidan. Istället vill vi användaren ska trycka `Enter` efter att den skrivit in en gissning.

Börja med att lägga till en *event-listener* på dokumentet, som lyssnar efter `keyup`-event. Kolla ledtråden nedan om du är osäker.

Gör så att gissningen skrivs ut i consolen när användaren trycker `Enter`.

<details>
<summary>Ledtråd 1</summary>

````javascript
    document.addEventListener('keyup', function (event) {
    console.log('You pressed key', event.key)
})
````
</details>
<details>
<summary>Ledtråd 2 (lösning)</summary>

````javascript
    document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const guess = getGuess()
        console.log(guess)
    }
})
````
</details>

### 4. Ge feedback till användaren
Nu kommer det allra viktigaste! Vi måste berätta för användaren om gissningen är för hög eller för låg.

Börja med att skapa en funktion `setMessage(msg)`, som bara sätter texten på message-elementet till argumentet som du skickar in.

Så att t.ex. `setMessage("Too high!")` sätter meddelandet på sidan till `Too high!`.

<details>
<summary>Ledtråd 1</summary>

````javascript
    document.getElementById('message').innerText = 'foooo'
````
</details>

Gör nu så att lämpligt meddelande sätts beroende på om användarens gissning är för hög, för låg eller om den är rätt.

````
Too low!
Too high!
You are correct!
````

### 5. Rensa användarens input
Sist, vi vill såklart att input-fältet ska rensas efter varje gissning. Skapa en funktion `clearInput` som rensar input-fältet.

Anropa den efter varje gissning.

<details>
<summary>Ledtråd 1</summary>

````javascript
    document.getElementById('user-input').value = ''
````
</details>

## Fördjupning

:tada: :tada: :tada:

Grattis! Nu är den grundläggande funktionaliteten på plats.

````
Innan du fördjupar dig:

1. Om det är något du själv är osäker på, gå in i Google Meet:en eller skriv på Google Chat. Ta chansen att fråga om det du är osäker på. Var modig!
2. Fundera över vad som är bästa taktiken för att gissa rätt nummer mest så få gissningar som möjligt. Vad är taktiken? Om du inte kommer på, fundera på vad som skulle vara en riktigt dålig taktik.
````

Nedan följer ett gäng förslag på fördjupningar. Gör så många du hinner!

### Spara alla gissningar i en array
Skapa en till global variabel `guesses` som är en tom array. Fyll på den med varje ny gissning.

Visa alla gjorda gissningar på sidan.

<details>
<summary>Ledtråd</summary>

Använd array-metoden `push`

````javascript
    const arr = []
    arr.push(5)
    arr.push(8)
    console.log(arr)
````
</details>

### Redovisa hur många gissningar som krävdes
När användaren till slut lyckas, skriv ut hur många gissningar som behövdes.

<details>
<summary>Pro tip!</summary>

Använd string template literals!
````javascript
    const age = 15
    const myString = `Jag är ${age} år gammal`
````
</details>

### Färgkoda gissningarna
Gör så att alla gjorda gissningar som är för låga blir **gröna**.
Gör så att alla gjorda gissningar som är för höga blir **röda**.

### Visa en knapp för att nollställa (börja om) när du vunnit
Självförklarande.

### Behåll resultatet mellan omstarterna
Vad är lägsta antalet gissningar hittills?
Visa på sidan.

### Använd LocalStorage för att spara resultat även när du startar om browsern
Just nu nollställs allt varje gång du refreshar sidan.

Läs på om hur du kan använda [LocalStorage](https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/) för att spara data i browsern även när du stängt ner den.

### Kom på något eget!
Det finns ännu fler saker att lägga till. Kom på något själv. **Fantasin sätter gränserna!**
