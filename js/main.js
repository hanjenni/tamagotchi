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
let win;//when you pick on the correct button for mood
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
    startButton = moods[randomIndex];
}

function message(){
//random message(find ways to display it)
    const randomIndex= Math.floor(Math.random() * moods.length);
    startButton = moods[randomIndex]; 
    console.log(startButton);
}

function feed(){
    const message = document.getElementById('message');
    if (startButton == moods[0]){
        console.log('fed');
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
   


render
function render(){

}




