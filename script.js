
// DropDown BTN

var menu = document.getElementById('menu');
var dropDown = document.getElementById('dropDown');
var dropDownBtn = document.getElementById('dropDown-btn');
var logo = document.getElementById('logo'); 
 

menu.onclick = function(){
    menu.style.display = 'block';
    dropDown.style.display = 'block';   
}
dropDownBtn.onclick = function(){
    menu.style.display = 'block';
    dropDown.style.display = 'none';
}   

// DropDown BTN

// GameRules

let score = 0;
let best = 0;
let start = document.getElementById('start');
let stopGame = document.getElementById('stop');
let green = document.getElementById('green');
let bblur = document.getElementById('blur')
let blue = document.getElementById('blue');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let gameContainer = document.getElementById('gameContainer')
let colors;
let gameInProgress = false;
let sequence = [];
let userSequence = [];


// Audio By PixaBay 
var bAudio = new Audio('scale-d6.mp3')
var rAudio = new Audio('scale-c7.mp3')
var yAudio = new Audio('scale-e6.mp3')
var gAudio = new Audio('scale-g6.mp3')
// Audio By PixaBay 

function updateScore(newScore) {
    score = newScore;
    document.getElementById('score').innerHTML = score.toString().padStart(2, '0');
}

function updateBest(newBest) {
    score = newBest;
    document.getElementById('best').innerHTML = best.toString().padStart(2, '0');
}

function handleClickCorrect(){
    document.documentElement.style.setProperty('--green', '#34BE67');
    document.documentElement.style.setProperty('--red', '#DC4A4A');
    document.documentElement.style.setProperty('--yellow', '#CBAD38');
    document.documentElement.style.setProperty('--blue', '#3B7AC9');
    handleContinueGame();       
    updateScore(score + 1);
}
function handleClickIncorrect(){
    endGame();
}
function handleContinueGame(){
    startGame()
}
function endGame(){
    green.style.cursor = blue.style.cursor = red.style.cursor = yellow.style.cursor = 'default';
    green.onclick = blue.onclick = red.onclick = yellow.onclick = null;
    gameInProgress = false;
    alert('You got it wrong! Game Over!');
    document.documentElement.style.setProperty('--green', '#34BE67');
    document.documentElement.style.setProperty('--red', '#DC4A4A');
    document.documentElement.style.setProperty('--yellow', '#CBAD38');
    document.documentElement.style.setProperty('--blue', '#3B7AC9');
    gameContainer.style.border = 'solid 20px transparent'
    start.style.pointerEvents = 'all';
    gameContainer.style.boxShadow = '0 0 700px 50px transparent';
    start.style.backgroundColor = '#ddd';
    start.style.color = '#171717';
    start.style.cursor = 'pointer';
    start.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
    if(score > best){
        updateBest(best = score);
    }   
    else if(score === best){
        best = best;
    }
    else if(score <= best){
        best = best;
    }
    updateScore(score * 0);
}

start.onclick = function buttonStart(){
    gameInProgress = true;
    start.style.backgroundColor = 'transparent';
    start.style.color = 'transparent';
    start.style.cursor = 'default';
    start.style.boxShadow = 'none'
    start.style.pointerEvents = 'none'
    startGame();
}

function randomColors(){
    let random = Math.floor(Math.random() * 4);
    const colorsArray = ['green', 'blue', 'red', 'yellow']
    colors = colorsArray[random];
}
function newSequence(){
    const newColor = randomColors(); 
    sequence.push(newColor);
}

function startGame(){
    randomColors(); 
    if( colors === 'green'){
        console.log('green')
        green.style.cursor = 'pointer'
        document.documentElement.style.setProperty('--green', '#92EBB3');
        gameContainer.style.border = 'solid 20px #92EBB3';
        gameContainer.style.boxShadow = '0 0 700px 50px #92EBB3';
        gAudio.play();
        green.onclick = () => handleClickCorrect()
        red.onclick = () =>  handleClickIncorrect()
        yellow.onclick = () => handleClickIncorrect()
        blue.onclick = () => handleClickIncorrect()
    }
    else if( colors === 'blue'){
        console.log('blue')
        blue.style.cursor = 'pointer'
        document.documentElement.style.setProperty('--blue', '#A0C9FC');
        gameContainer.style.border = 'solid 20px #A0C9FC'
        gameContainer.style.boxShadow = '0 0 700px 50px #A0C9FC';
        bAudio.play();
        blue.onclick = () => handleClickCorrect()
        red.onclick = () =>  handleClickIncorrect()
        yellow.onclick = () => handleClickIncorrect()
        green.onclick = () => handleClickIncorrect()
    }
    else if( colors === 'red'){
        console.log('red')
        red.style.cursor = 'pointer'
        document.documentElement.style.setProperty('--red', '#fa6868');
        gameContainer.style.border = 'solid 20px #fa6868'
        gameContainer.style.boxShadow = '0 0 700px 50px #fa6868';
        rAudio.play();
        red.onclick = () => handleClickCorrect()
        green.onclick = () =>  handleClickIncorrect()
        yellow.onclick = () => handleClickIncorrect()
        blue.onclick = () => handleClickIncorrect()
    }
    else if( colors === 'yellow'){
        console.log('yellow')
        yellow.style.cursor = 'pointer'
        document.documentElement.style.setProperty('--yellow', '#FCE073');
        gameContainer.style.border = 'solid 20px #FCE073'
        gameContainer.style.boxShadow = '0 0 700px 50px #FCE073';
        yAudio.play();
        yellow.onclick = () => handleClickCorrect()
        red.onclick = () =>  handleClickIncorrect()
        green.onclick = () => handleClickIncorrect()
        blue.onclick = () => handleClickIncorrect()
    }
}

// GameRules
