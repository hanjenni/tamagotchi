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


/*----- app's state (variables) -----*/
//what are the things that can change?
let display; //what is going to be displayed
let score = 0;//score accumulated
let win;//5 points
let lose;//when you pick incorrect button for mood
let startButton; //when start button is pressed, random msg is generated

/*----- cached element references -----*/

const startEl= document.getElementById("start");
const foodEl= document.getElementById("btn-food");
const bedEl= document.getElementById('btn-bed');
const toyEl= document.getElementById('btn-toy');
const messageEl = document.getElementById('message');
const scoresEl = document.getElementById('score');

/*----- event listeners -----*/
startEl.addEventListener('click', startMessage);
foodEl.addEventListener('click', feed);
bedEl.addEventListener('click' , rest);
toyEl.addEventListener('click', play);

/*----- functions -----*/
init()
//what is the reset?
function init(){
    const randomIndex= Math.floor(Math.random() * moods.length);
    startButton = moods[randomIndex]; //random msg resets each time 

    score = 0;//score resets each time

    winner= null;//winner resets each time

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
function addScore(){
    if (score === 5){
        console.log('you win');
    }else {
        score= score + 1;
    }
}

//function minusScore() 



function feed(){
     if (startButton == moods[0]){
         message.innerText='fed'
     }else if (startButton == moods[1]){
         console.log('fed')
         message.innerText='fed'
     }else if (startButton == moods[2]){
         console.log('fed')
         message.innerText='fed'
     }else {
         console.log('try again');
         message.innerText='try again'
     }  
}
    
function rest(){
    if (startButton == moods[3]){
        message.innerText='rested'
        console.log('rested')
    }else if (startButton == moods[4]){
        message.innerText='rested'
        console.log('rested')
    }else if (startButton == moods[5]){
        message.innerText='rested'
        console.log('rested')
    }else{
        message.innerText= 'try again'
        console.log('try again')
    }
}

function play(){
    if (startButton == moods[4]){
        message.innerText= 'had fun'
        console.log('had fun')
    }else if (startButton == moods[5]){
        message.innerText= 'had fun'
        console.log('had fun')
    }else if (startButton == moods[6]){
        message.innerText= 'had fun'
        console.log('had fun')
    }else {
        message.innerText= 'try again'
        console.log('try again')
    }

}


render
function render(){
message.innerText = startButton;

}








