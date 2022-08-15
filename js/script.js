// Dices animation
/// Variables :
const whiteDice = document.querySelector('#white-dice');
const greenDice = document.querySelector('#green-dice');

///Fonctions :
greenDice.classList.add('Gdice__move-in');
whiteDice.classList.add('Wdice__move-in');
setTimeout(()=> {
    whiteDice.classList.add('Wdice__wiggle')
}, 1500)
setTimeout(()=> {
    greenDice.classList.add('Wdice__wiggle')
}, 2000)


// 