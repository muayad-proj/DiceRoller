let TotaleEl = document.querySelector("#totale")
let inputEl = document.querySelector("#input")
let submitButton = document.querySelector("#submit")
let totalshow=document.querySelector("#show-all-rolls")
let allRolls=document.querySelector("#all_roll")
var dieRolls = [];
submitButton.addEventListener("click", function () {
    //console.log(inputEl, TotaleEl, submitButton, dicerollElm)

    let userinput = inputEl.value
    let count = 0
    for (count = 0; count < userinput; count++) {
        currentRoll = Math.floor(Math.random() * 6 + 1)
        dieRolls.push(currentRoll)
        console.log(dieRolls)
    }
})

totalshow.addEventListener("click", function () {
 let  sum = 0
    for (let count1 = 0; count1 < dieRolls.length; count1++) {
        let numberRolled = dieRolls[count1]
        const newDiceString = '<li class="dice">' + numberRolled + "</li>";
        allRolls.innerHTML+=newDiceString
        sum= sum+numberRolled
    }
    TotaleEl.innerHTML=sum
    //console.log(dieRolls)
})






