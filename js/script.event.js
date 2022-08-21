// Animation du formulaire :

/// Variables : 
const letterUp       = document.querySelector('#letter_up');
const letterDown     = document.querySelector('#letter_down');
const sectionContact = document.querySelector('#contact__container');
const letter         = document.querySelector('#letter');
let clicked          = false;

console.log(sectionContact.clientHeight)

/// Fonctions : 
letterUp.addEventListener('click', e => {
    e.preventDefault();
    if (clicked){
        return;
    } else {
        clicked = true;
    }
    const heightContact    = sectionContact.clientHeight;
    const heightLetterUp   = letterUp.clientHeight;
    const heightLetterDown = letterDown.clientHeight;
    const totalHeight      = heightContact + heightLetterUp + heightLetterDown;

    letterUp.classList.add('open-on_up');
    letterDown.classList.add('open-on_down');
    if (window.innerWidth <= 768 ){
        document.documentElement.style.setProperty('--h-letter', totalHeight + 'px');
    } else {
        document.documentElement.style.setProperty('--h-letter', totalHeight + 'px');
    }
    console.log(totalHeight)
    sectionContact.style.height = totalHeight-120 + 'px';
    letter.style.transform      = 'translateY(55%)';
})

// Disabled option 
///Variables 
const form = document.querySelector('form');

form.addEventListener('click', e => {
    
    const inputsSelect = form.querySelectorAll('.form-select');
    const inputsRadio  = form.querySelectorAll('.form-check-input[type=radio]');

    Array.from(inputsRadio, (input, index) => {
        if (e.target == input || e.target == inputsSelect[index]){
            if (e.target.disabled == true){
                return;
            } else {
                if (index == 3){
                    return;
                }
                inputsSelect[index].disabled = false;
            }
        } else {
            if (!input.checked && index < 3){
                inputsSelect[index].disabled = true;
            }
        }
    });
    // Check si toutes les valeurs sont valides :
    
    /// Variables
    const submitButton   = form.querySelector('button[type=submit]')
    const name           = form.querySelector('#name');
    const email          = form.querySelector('#email');
    const textarea       = form.querySelector('textarea');
    const commitment     = form.querySelector('.form-check-input[type=checkbox]')
    const elementsToCheck = [name, email, textarea, inputsSelect, commitment]
    let elementsValid = 0;

    /// Fonctions
    for (let i = 0; i < elementsToCheck.length; i++){
        submitButton.disabled = true;
        if (i < 3){
            if (elementsToCheck[i].checkValidity()){
                elementsValid++;
            }
        } else if (i == 3){
            if (inputsRadio[3].checked) {
                elementsValid++;
            } else {
                inputsSelect.forEach(select => {
                    if (!select.disabled){
                        for (option of select){
                            if (option.selected && option.value != ''){
                                elementsValid++;
                            }
                        }
                    }
                })
            }
        } else if (i == 4){
            if (commitment.checked){
                elementsValid++;
            }
        }
    }
    if (elementsValid == 5){
        submitButton.disabled = false;
    }
});

 