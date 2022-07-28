/*----- constants -----*/
const moods = [
    '"so hungry"',
    '"im starved"',
    '"feeling famished"',
    '"extremely exhausted"',
    '"very sleepy"',
    '"so drowsy"',
    '"im so bored"',
    '"im feeling dull"',
    '"this is uneventful"'
];

const fedMoods = [moods[0], moods[1], moods[2]];
const restMoods= [moods[3], moods[4], moods[5]];
const playMoods= [moods[6], moods[7], moods[8]];

const player= new Audio();

/*----- app's state (variables) -----*/
let score = 0;
let startButton; 

/*----- cached element references -----*/

const startEl= document.getElementById("start");
const foodEl= document.getElementById("btn-food");
const bedEl= document.getElementById('btn-bed');
const toyEl= document.getElementById('btn-toy');
const messageEl = document.getElementById('message');
const scoresEl = document.getElementById('scoreBoard');
const playagainEl= document.getElementById('play-again');
const musicEl= document.getElementById('music');

/*----- event listeners -----*/
startEl.addEventListener('click', startMessage);
foodEl.addEventListener('click', feed);
bedEl.addEventListener('click' , rest);
toyEl.addEventListener('click', play);
playagainEl.addEventListener('click',init);

/*----- functions -----*/
init()
function init(){
    scoreBoard.innerText= ''
    message.innerText= ''
    score = 0;
    
}

/*----- random mood when "go" clicked -----*/
function startMessage(){
    const randomIndex= Math.floor(Math.random() * moods.length);
    startButton = moods[randomIndex]; 
    message.innerText = startButton;

}

/*----- add/subt score -----*/
function addScore(){
    return score= score+1;
}

function minusScore(){
   return score= score-1;
} 

/*----- music functions -----*/
musicEl.volume = .3; 

function playAudio(){
    musicEl.play();
}
function pauseAudio(){
    musicEl.pause();
}

   
/*----- feed functions -----*/
function feed(){
    if (score===4 && fedMoods.includes(startButton)){
        message.innerText=''
        return scoreBoard.innerText = 'You win! Tama is happy'
    }else if (fedMoods.includes(startButton)){
        message.innerText = '"yumm....!"' 
        scoreBoard.innerText = addScore();
    }else if (score <= 1){
        message.innerText= ''
        scoreBoard.innerText = "You lose, play again"
    }else {
        message.innerText = 'try again'
        scoreBoard.innerText = minusScore()
    }
}

/*----- rest functions -----*/
function rest(){
    if  (score===4 && restMoods.includes(startButton)){
        message.innerText=''
        return scoreBoard.innerText = 'You win! Tama is happy'
    }else if (restMoods.includes(startButton)){
        message.innerText = '"feeling much better"'
        scoreBoard.innerText = addScore();
    }else if (score <= 1){
        message.innerText= ''
        scoreBoard.innerText = "You lose, play again"
    }else {
        message.innerText = 'try again'
        scoreBoard.innerText = minusScore()
    }
}

/*----- play functions -----*/
function play(){
    if (score===4 && playMoods.includes(startButton)){
        message.innerText=''
        return scoreBoard.innerText = 'You win! Tama is happy'
    }else if (playMoods.includes(startButton)){
        message.innerText = '"that was fun!"'
        scoreBoard.innerText = addScore();
    }else if (score <= 1){
        message.innerText= ''
       scoreBoard.innerText = "You lose, play again"
    }else {
        message.innerText = 'try again'
        scoreBoard.innerText = minusScore()
    }
}



