// 'use strict';
//get the div items in the game
const gameboardDIV = document.querySelector("#gameboard")
const loadingBee = document.querySelector("#loadingBee")
const game = document.querySelector("#game")
const wordDIV = document.querySelector("#word")
const letters = document.querySelector("#letters")

// get the div items in the wordsBank
const wordsBank = document.querySelector("#wordsBank")
const foundTitle = document.querySelector("#foundTitle")
const words = document.querySelector("#words")

//create your buttons
const a_button = document.createElement("button", "is-warning", "m-2")
a_button.innerHTML = "A"
document.body.appendChild(a_button)

const b_button = document.createElement("button", "is-warning", "m-2")
b_button.innerHTML = "B"
document.body.appendChild(b_button)

const c_button = document.createElement("button", "is-warning", "m-2")
c_button.innerHTML = "C"
document.body.appendChild(c_button)

const d_button = document.createElement("button", "is-warning", "m-2")
d_button.innerHTML = "D"
document.body.appendChild(d_button)

const e_button = document.createElement("button", "is-warning", "m-2")
e_button.innerHTML = "E"
document.body.appendChild(e_button)

const f_button = document.createElement("button", "is-warning", "m-2")
f_button.innerHTML = "F"
document.body.appendChild(f_button)

const addButton = document.createElement("button", "is-black")
addButton.innerHTML = "ADD"
document.body.appendChild(addButton)

//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loaders and other neat stuff!! :)

//using EventListener "DOMContentLoaded", load the add buttons

document.addEventListener("DOMConentLoaded", () => {
    setTimeout(() => {
        game.appendChild(addButton)
    }, 3500)
})

//using an IIFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES.

(() => {
    // console.log("IIFE is loaded")
    setTimeout(() => {
        loadingBeeDIV.classList.toggle("hide")
        wordDIV.classList.toggle("hide");
        wordsBankDIV.classList.toggle("hide")
        lettersDIV.appendChild(a_button);
        lettersDIV.appendChild(b_button);
        lettersDIV.appendChild(c_button);
        lettersDIV.appendChild(d_button);
        lettersDIV.appendChild(e_button);
        lettersDIV.appendChild(f_button);

    }, 3000)
})();

//Step-3 write the listeners to take a letter and add to your word div
let storeLetters = [];

document.body.appendChild(a_button)


//add a function to take your word from the word div and add it to an Array to then add to your Words Bank