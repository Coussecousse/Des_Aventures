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


// BRUSH TEXT

// Variables :
/// First Brush : 
const FirstBrushLeft = document.querySelector('#brush-right');
const blackCube = document.querySelector('#black-cube');
const dicesGoBack = document.querySelectorAll('.goBack')
const distanceFromTheTopFirst = FirstBrushLeft.getBoundingClientRect().top;
/// Second Brush:
const SecondBrush = document.querySelector('#brush-visibility');
const distanceFromTheTopSecond = SecondBrush.getBoundingClientRect().top;

/// Third Brush
const thirdBrushRight = document.querySelector('#brush-left');
const distanceFromTheTopThird = thirdBrushRight.getBoundingClientRect().top;

console.log(scrollY);



window.addEventListener('scroll', () => {  
    let scrollY = window.scrollY;

    if (scrollY >= distanceFromTheTopFirst -200 ){
        setTimeout(() => {
            dicesGoBack.forEach( dice => {
                dice.style.zIndex = '-6';
            })
        }, 530);
        blackCube.classList.add('cube-left');
    } 
    
    
})