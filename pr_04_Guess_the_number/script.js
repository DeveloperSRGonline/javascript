const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const remainingAttempts = document.querySelector('.remaining')
const message = document.querySelector('.message')

const p = document.createElement('p')

let prevGuess = []