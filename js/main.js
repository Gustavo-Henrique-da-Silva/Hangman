

let clue;
let choice;
let wordig="";
let wins;
let losses;
let answer;
let ch;
let attempts;
const words = new Array("python", "java", "swift", "javascript");
let isAlpha = (l) => {return /^[a-z]$/.test(l)}
if(wins === undefined){
    wins=0;
}
if(losses === undefined){
    losses=0;
}
//button.setAttribute('hidden', true);



const bChoice  = document.getElementsByClassName("button-choice");

const header = document.getElementById("header");
const vWin = document.getElementById("vWin");
const vLoss = document.getElementById("vLoss");
const vGame = document.getElementById("vGame");
const headerText = document.getElementById("text");
const textAttempts = document.getElementById("textAttempts");

const hWord = document.getElementById("headerWord");
const word = document.getElementById("word");
const Iletter = document.getElementById("letter");
const bStart = document.getElementById("start");
const bResults = document.getElementById("results");
const bExit = document.getElementById("exit");
const bGame = document.getElementById("game");

//$("#exit").hide()
$("#letter").hide();
$("#game").hide();
$("#headerWord").hide()
//bChoice.setAttribute('hidden', true);
//bLetter.setAttribute('hidden', true);

bStart.addEventListener('click' , prepare);
bResults.addEventListener('click' , results);
bExit.addEventListener('click' , exit); 

