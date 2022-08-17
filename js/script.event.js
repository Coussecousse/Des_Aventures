// Animation du formulaire :

/// Variables : 
const letterUp = document.querySelector('#letter_up');
const letterDown = document.querySelector('#letter_down');
const sectionContact = document.querySelector('#contact__container');
const letter = document.querySelector('#letter');
let clicked = false;

console.log(sectionContact.clientHeight)

/// Fonctions : 
letterUp.addEventListener('click', () => {
    if (clicked){
        return;
    } else {
        clicked = true;
    }
    const heightContact = sectionContact.clientHeight;
    const heightLetterUp = letterUp.clientHeight;
    const heightLetterDown = letterDown.clientHeight;
    const totalHeight = heightContact + heightLetterUp + heightLetterDown;

    letterUp.classList.add('open-on_up');
    letterDown.classList.add('open-on_down');
    if (window.innerWidth <= 768 ){
        document.documentElement.style.setProperty('--h-letter', totalHeight + 'px');
    } else {
        document.documentElement.style.setProperty('--h-letter', totalHeight + 'px');
    }
    console.log(totalHeight)
    sectionContact.style.height = totalHeight-120 + 'px';
    letter.style.transform = 'translateY(45%)';
})