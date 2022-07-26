/*----- constants -----*/
const moods = [
    'hungry',
    'starved',
    'famished',
    'exhausted',
    'sleepy',
    'drowsy',
    'bored',
    'dull',
    'uneventful'
];

const fedMoods = [moods[0], moods[1], moods[2]];
const restMoods= [moods[3], moods[4], moods[5]];
const playMoods= [moods[6], moods[7], moods[8]];


/*----- app's state (variables) -----*/
//what are the things that can change?
//let display; //what is going to be displayed
let score = 0;//score accumulated
//let win;//5 points
//let lose;//when you pick incorrect button for mood
let startButton; //when start button is pressed, random msg is generated

/*----- cached element references -----*/

const startEl= document.getElementById("start");
const foodEl= document.getElementById("btn-food");
const bedEl= document.getElementById('btn-bed');
const toyEl= document.getElementById('btn-toy');
const messageEl = document.getElementById('message');
const scoresEl = document.getElementById('scoreBoard');
const resetEl= document.getElementById('reset');
const winlogEl=document.getElementById('win-log');

/*----- event listeners -----*/
startEl.addEventListener('click', startMessage);
foodEl.addEventListener('click', feed);
bedEl.addEventListener('click' , rest);
toyEl.addEventListener('click', play);
resetEl.addEventListener('click',init);

/*----- functions -----*/
init()
//what is the reset?
function init(){
    // const randomIndex= Math.floor(Math.random() * moods.length);
    // startButton = moods[randomIndex]; //random msg resets each time 
    scoreBoard.innerText= 'Tama says...'
    message.innerText= ''
    score = 0;//score resets each time
    //win= null;//winner resets each time
    

}
//controls the start button so it picks out random 
//random message(find ways to display it)
//random message appears (is this needed or repeat of init?)
function startMessage(){
    const randomIndex= Math.floor(Math.random() * moods.length);
    startButton = moods[randomIndex]; 
    message.innerText = startButton;
    console.log(startButton);

}

//ad parts of this to above to display the random message?
//is this correct?
function addScore(){
    return score= score+1;
}

function minusScore(){
   return score= score-1;
} 





function feed(){
    if (fedMoods.includes(startButton)){
        message.innerText = 'fed'
        scoreBoard.innerText = addScore();
        console.log('fed.work')
    }else if (score <= 1){
        scoreBoard.innerText = "you lose, play again"
    // }else if (score === 3){
    //     message.innerText = 'you won!'
    } else {
        message.innerText = 'try again'
        scoreBoard.innerText = minusScore()
        console.log('fed-score')
}

    
}


 function rest(){
    if (restMoods.includes(startButton)){
        message.innerText = 'rest'
        scoreBoard.innerText = addScore();
        console.log('rest.work')
    }else if (score <= 1){
        scoreBoard.innerText = "you lose, play again"
    // }else if (score === 3){
    //     message.innerText = 'you won!'
    }else {
        message.innerText = 'try again'
        scoreBoard.innerText = minusScore()
        console.log('rest-score')
}

}

function play(){
    if (playMoods.includes(startButton)){
        message.innerText = 'fun'
        scoreBoard.innerText = addScore();
        console.log('play.work')
    }else if (score <= 1){
        scoreBoard.innerText = "you lose, play again"
      
    // }else if (score === 3){
    //      message.innerText = 'you won!'
    }else {
        message.innerText = 'try again'
        scoreBoard.innerText = minusScore()
        console.log('play-score')
}

}

render
function render(){
message.innerText = startButton;

}








