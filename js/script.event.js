// Animation du formulaire :

/// Variables : 
const letterUp = document.querySelector('#letter_up');
const letterDown = document.querySelector('#letter_down');
const sectionContact = document.querySelector('#contact__container');
const letter = document.querySelector('#letter');
let clicked = false;

console.log(sectionContact.clientHeight)

/// Fonctions : 
letterUp.addEventListener('click', e => {
    e.preventDefault();
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
    letter.style.transform = 'translateY(55%)';
})

// Disabled option 
///Variables 
const secondPartLetter = document.querySelector('.form__second-part');

secondPartLetter.addEventListener('click', e => {
    
    const inputSelect = secondPartLetter.querySelectorAll('.form-select');
    const inputRadio  = secondPartLetter.querySelectorAll('.form-check-input');

    Array.from(inputRadio, (input,index) => {
        if (index < 3){
            inputSelect[index].disabled = true;
        }
        if (e.target != input){
            return;
        }
        if (input.checked){
            if (input == inputRadio[3]){
                return;
            } else {
                inputSelect[index].disabled = false;
            }
        } 
    })
})