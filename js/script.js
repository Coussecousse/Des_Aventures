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
const FirstBlackCube = document.querySelector('#black-first-cube');
const dicesGoBack = document.querySelectorAll('.goBack')
const distanceFromTheTopFirst = FirstBrushLeft.getBoundingClientRect().top;
/// Second Brush:
const SecondBrush = document.querySelector('#brush-visibility');
const distanceFromTheTopSecond = SecondBrush.getBoundingClientRect().top;

/// Third Brush
const thirdBrushRight = document.querySelector('#brush-left');
const LastBlackCube = document.querySelector('#black-last-cube');
const distanceFromTheTopThird = thirdBrushRight.getBoundingClientRect().top;

console.log(scrollY);



window.addEventListener('scroll', () => {  
    let scrollY = window.scrollY;
    let h = window.innerHeight;

    if (scrollY >= distanceFromTheTopFirst - h){
        // setTimeout(() => {
        //     dicesGoBack.forEach( dice => {
        //         dice.style.zIndex = '-6';
        //     })
        // }, 530);
        FirstBlackCube.classList.add('cube-left');
        setTimeout(() => {
            FirstBrushLeft.style.zIndex = 1;
        },550);
    } 
    if (scrollY >= distanceFromTheTopSecond - h){
        SecondBrush.classList.add('brush__splash-visible');
        SecondBrush.style.zIndex = '1'
    }
    if (scrollY >= distanceFromTheTopThird - h ){
        LastBlackCube.classList.add('cube-right');
        setTimeout(() => {
            thirdBrushRight.style.zIndex = 1;
        },350);
    }
    
})