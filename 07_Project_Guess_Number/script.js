let randomNum=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loOrhi=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[] // jitne number guess kar chuka hai wo sab array me rakh do
let numGuess=1 // starting itne guess se hoga

let playgame=true

if(playgame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess)
{
    // guess 1 se 100 k bich me hai ya nhi aur kuch aur ulta sidha number 
    // to nhi daal diya hai na wo check karna hai

    if(isNaN(guess))
    {
        alert('Please enter a valid number')
    }

    else if(guess<1)
    {
        alert('Please enter a number>1')
    }

    else if(guess>100)
    {
        alert('Please enter a number<100')
    }

    else
    {
        prevGuess.push(guess)
        if(numGuess>10)
        {
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${guess}`)
            endGame()
        }
        else
        {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
//  guess kiya hua number high, low ya kya hai wo message displaymesaage se batao
    if(guess===randomNum)
    {
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess>randomNum)
    {
        displayMessage(`Number is too High`)
    }
    else if(guess<randomNum)
    {
        displayMessage(`Number is too Low`)
    }
}

function displayGuess(guess)
{
//  guess ko update karega aur clean karega kyuki next input bhi lena hai na
    userInput.value=''
    guessSlot.innerHTML+=`${guess} ,`
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message)
{
    loOrhi.innerHTML=`<h2>${message}</h2>`
}

function endGame()
{
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id='newGame'>Start new Game</h2>`
    startover.appendChild(p)
    playgame=false
    newGame()
}

function newGame()
{
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNum=parseInt(Math.random()*100+1)
        prevGuess= []
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startover.removeChild(p)

        playgame=true
    })
}

