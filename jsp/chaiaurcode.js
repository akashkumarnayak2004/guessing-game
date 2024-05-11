let randomnumber=parseInt(Math.random()*10+1);

const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')
const guesslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworhi=document.querySelector('.lowOrHi')

const startover=document.querySelector('.resultParas')

const p = document.createElement('p')

let prevguess=[]
let numguess=1
let playgame=true

if(playgame){
    submit.addEventListener('click',function(e){
e.preventDefault()
const guess =parseInt(userinput.value)
validateguess(guess)
    })

}
function validateguess(guess){
if(isNaN(guess)){
alert('please enter a valid nummber')
}else if(guess <1){
    alert('please enter a valid nummber more than 1')
}else if(guess >10){
    alert('please enter a valid nummber less than 100')

}else {
    prevguess.push(guess)
    if(numguess ===6){
        displayguess(guess)
        displayMessage(`game over random number was ${randomnumber}`)
        endGame()
    }else{
        displayguess(guess)
        checkguess(guess)
    }
}
}


function checkguess(guess){
if(guess === randomnumber){
displayMessage(`you guessed right`)
endGame()
}else if(guess < randomnumber){
    displayMessage(`number is TOOO low`)
}else if (guess > randomnumber){
    displayMessage(`number is too high`)
}
}

function displayguess(guess){
userinput.value=''
guesslot.innerHTML +=`${guess} `
numguess++;
remaining.innerHTML =`${6-numguess}`
}
function displayMessage(message){
loworhi.innerHTML=`<h2>${message}</h2>`
}


function endGame(){
userinput.value=''
userinput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id="newGame">start new game</h2>`;
startover.appendChild(p)
playgame=false
newGame()
}
function newGame(){
const newgamebutton=document.querySelector('#newGame')
newgamebutton.addEventListener('click',function(e){
    randomnumber=parseInt(Math.random()*10+1);
    prevguess=[]
    numguess=1
    guesslot.innerHTML=''
    remaining.innerHTML=`${6-numguess}`;
    userinput.removeAttribute('disabled')
    startover.removeChild(p);
playgame=true
})
}