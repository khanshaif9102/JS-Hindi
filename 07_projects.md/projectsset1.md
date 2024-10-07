# Project related DOM
## Project Link
[Click here]()

# Solution code
## Project 1

```JavaScript
console.log("SHAIF")

const buttons=document.querySelectorAll('.button')
// console.log(buttons);
const body=document.querySelector("body");
// console.log(body);

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id=='grey'){
            body.style.backgroundColor=e.target.id;
        } else if(e.target.id=='white'){
            body.style.backgroundColor=e.target.id;
        } else if(e.target.id=='blue'){
            body.style.backgroundColor=e.target.id;
        } else if(e.target.id=='yellow'){
            body.style.backgroundColor=e.target.id;
        }
    })
})
```

## project 2 solution

```JavaScript

const form=document.querySelector('form');
//this usecase will give you empty value 
//const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#Height').value)
    const weight=parseInt(document.querySelector('#Weight').value)
    const results=document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height) ){
        results.innerHTML=`Please give a valid height ${height}`;
    } else if(weight==='' || weight<0 || isNaN(weight) ){
        results.innerHTML=`Please give a valid wieght ${weight}`;
    }
    else{
      const bmi=  (weight/((height*height)/10000)).toFixed(2)
      //show the results
      results.innerHTML=`<span>${bmi}</span>`
    }
})


```

## project 3 solution code

```javascript

const clock=document.getElementById('clock');
// const clock=document.querySelector('#clock')

//let date=new Date();
// console.log(date.toLocaleTimeString());
setInterval(function(){
    let date=new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString();
}, 1000)

```

## Project 4 GuessTheNumber Code
```javascript

//console.log(parseInt(Math.random()*100+1))
let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p');

let prevGuess=[]
let numGuess=1

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number')
    } else if(guess>100){
        alert('Please Enter a number less than 100')
    } else if(guess<1){
        alert('Please Enter a number more than 1')
    } else{
        prevGuess.push(guess);
        if(numGuess===11){
            guessDisplay(guess);
            displayMessage(`Gamer Over. Random Number Was ${randomNumber}`);
            endGame();
        } else {
            guessDisplay(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it Right`)
        endGame();
    } else if(guess<randomNumber){
        displayMessage(`Number is TOOO low`)
    } else if(guess>randomNumber){
        displayMessage(`Number is too High`)
    }
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function guessDisplay(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess}  `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true;
    })
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();

}


```

## Project 5 Solution Code
# Unlimited Colors
```javascript

//Generate a random color

const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let setIntervalId;
// console.log(randomColor());
const startChangingColor=function(){
    //document.body.style.backgroundColor=randomColor();
  if(!setIntervalId){
    setIntervalId= setInterval(changeBgColor,1000)
  }
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
}
const stopChangingColor=function(){
    clearInterval(setIntervalId)
    setIntervalId=null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)

```

## project 6 Solution Code
# Keyboard
```javascript

const insert=document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class='color'>
    <table>
    <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${e.key===" "?'space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    </div>
    `;
    console.log(e.key);
    
});

```
