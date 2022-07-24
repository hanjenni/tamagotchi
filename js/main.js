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
]


/*----- app's state (variables) -----*/
//what are the things that can change?
let msg;
let win;
let lose;

/*----- cached element references -----*/
const food= document.getElementById("btn-food");
const bed= document.getElementById('btn-bed');
const toy= document.getElementById('btn-toy');

/*----- event listeners -----*/
food.addEventListener('click', 'feed');
bed.addEventListener('click' , 'rest');
toy.addEventListener('click', 'play');

/*----- functions -----*/
