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
//const allButtonEl= document.querySelector('.buttons')


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
    scoreBoard.innerText= ''
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


//how can i do this?
// function disableBtn(){
//     if (score===0){
//         document.querySelector('.buttons').disabled = true;
//     }else {
//         document.querySelector('.buttons').disabled = false;
//     }
// }   



function feed(){
    if (score===4){
        message.innerText=''
        return scoreBoard.innerText = 'Tama is happy'
    }else if (fedMoods.includes(startButton)){
        message.innerText = '"yumm....!"' 
        scoreBoard.innerText = addScore();
        console.log('fed.work')
    }else if (score>=4){
        message.innerText=''
        return scoreBoard.innerText = 'you won, press reset '
    }else if (score <= 1){
        message.innerText= ''
        return scoreBoard.innerText = "Press reset to try again"
    }else {
        message.innerText = 'try again'
        scoreBoard.innerText = minusScore()
        console.log('fed-score')
    }
}

 function rest(){
    if  (score===4){
        message.innerText=''
        return scoreBoard.innerText = 'Tama is happy'
    }else if (restMoods.includes(startButton)){
        message.innerText = '"feeling much better"'
        scoreBoard.innerText = addScore();
        console.log('rest.work')
    }else if (score>=4){
        message.innerText=''
        return scoreBoard.innerText = 'you won, press reset '
    }else if (score <= 1){
        message.innerText= ''
        return scoreBoard.innerText = "Press reset to try again"
    }else {
        message.innerText = 'try again'
        scoreBoard.innerText = minusScore()
        console.log('rest-score')
    }
}

function play(){
    if (score===4){
        message.innerText=''
        return scoreBoard.innerText = 'Tama is happy'
    }else if (playMoods.includes(startButton)){
        message.innerText = '"that was fun!"'
        scoreBoard.innerText = addScore();
        console.log('play.work')
    }else if (score == 1){
        message.innerText= ''
        return scoreBoard.innerText = "Press reset to try again"
    }else {
        message.innerText = 'try again'
        scoreBoard.innerText = minusScore()
        console.log('play-score')
    }
}



