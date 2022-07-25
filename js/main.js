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

const start= document.getElementById("start");
const food= document.getElementById("btn-food");
const bed= document.getElementById('btn-bed');
const toy= document.getElementById('btn-toy');

/*----- event listeners -----*/
start.addEventListener('click', message);
food.addEventListener('click', feed);
bed.addEventListener('click' , rest);
toy.addEventListener('click', play);

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
function message(){
//random message(find ways to display it)
//random message appears (is this needed or repeat of init?)
    const randomIndex= Math.floor(Math.random() * moods.length);
    startButton = moods[randomIndex]; 
     console.log(startButton);

}

//ad parts of this to above to display the random message?
function addScore(){
    let score= 0;
    const scores = document.getElementById('score');
    if (score === 5){
        score.innerText='you win'
    }else {
        score= score + 1;
    }
}

function minusScore(){

}

function feed(){
    const message = document.getElementById('message');
    if (startButton == moods[0]){
        message.innerText='fed'
    }else if (startButton == moods[1]){
        // console.log('fed')
        message.innerText='fed'
    }else if (startButton == moods[2]){
        // console.log('fed')
        message.innerText='fed'
    }else {
        // console.log('try again');
        message.innerText='try again'
    }
     
}
   
function rest(){

}

function play(){

}


render
function render(){

}




