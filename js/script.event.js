// Animation du formulaire :

/// Variables :
const letterUp = document.querySelector("#letter_up");
const letterDown = document.querySelector("#letter_down");
const sectionContact = document.querySelector("#contact__container");
const letter = document.querySelector("#letter");
let clicked = false;

/// Fonctions :
letterUp.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (clicked) {
    return;
  } else {
    clicked = true;
  }

  const heightContact = sectionContact.clientHeight;
  const heightLetterUp = letterUp.clientHeight;
  const heightLetterDown = letterDown.clientHeight;
  const totalHeight = heightContact + heightLetterUp + heightLetterDown;

  letterUp.classList.add("open-on_up");
  letterDown.classList.add("open-on_down");
  if (window.innerWidth <= 768) {
    document.documentElement.style.setProperty(
      "--h-letter",
      totalHeight + "px"
    );
  } else {
    document.documentElement.style.setProperty(
      "--h-letter",
      totalHeight + "px"
    );
  }
  sectionContact.style.height = totalHeight - 50 + "px";
  letter.style.transform = "translateY(55%)";
});

// Disabled option
///Variables
const form = document.querySelector("form");

form.addEventListener("click", (e) => {
  const inputsSelect = form.querySelectorAll(".form-select");
  const inputsRadio = form.querySelectorAll(".form-check-input[type=radio]");

  Array.from(inputsRadio, (input, index) => {
    if (e.target == input || e.target == inputsSelect[index]) {
      if (e.target.disabled == true) {
        return;
      } else {
        if (index == 3) {
          return;
        }
        inputsSelect[index].disabled = false;
      }
    } else {
      if (!input.checked && index < 3) {
        inputsSelect[index].disabled = true;
      }
    }
  });
  // Check si toutes les valeurs sont valides :

  /// Variables
  const submitButton = form.querySelector("button[type=submit]");
  const name = form.querySelector("#name");
  const email = form.querySelector("#email");
  const textarea = form.querySelector("textarea");
  const commitment = form.querySelector(".form-check-input[type=checkbox]");
  const elementsToCheck = [name, email, textarea, inputsSelect, commitment];
  let elementsValid = 0;

  /// Fonctions
  for (let i = 0; i < elementsToCheck.length; i++) {
    submitButton.disabled = true;
    if (i < 3) {
      if (elementsToCheck[i].checkValidity()) {
        elementsValid++;
      }
    } else if (i == 3) {
      if (inputsRadio[3].checked) {
        elementsValid++;
      } else {
        inputsSelect.forEach((select) => {
          if (!select.disabled) {
            for (option of select) {
              if (option.selected && option.value != "") {
                elementsValid++;
              }
            }
          }
        });
      }
    } else if (i == 4) {
      if (commitment.checked) {
        elementsValid++;
      }
    }
  }
  if (elementsValid == 5) {
    submitButton.disabled = false;
  }
});

// Le carousel dynamique sur les histoires :

/// Variables:
const carouselParent = document.querySelector(".carousel");
const carousel = document.querySelector(".carousel-inner");
const buttonsEvent = document.querySelectorAll(".btn-group");

/// Récupérer le fichier json :
let jsonStories;
fetch("../stories.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    jsonStories = json;
    for (let i = 0; i < jsonStories[0].FirstNight.length; i++) {
      carousel.appendChild(createStoryElement(jsonStories[0].FirstNight, i));
    }
  });

/// Fonctions :

carouselParent.addEventListener("click", (e) => {
  const buttonPrev = carouselParent.querySelector(".carousel-control-prev");
  const buttonNext = carouselParent.querySelector(".carousel-control-next");
  let activeButtonSelector;

  if (
    e.target != buttonPrev &&
    e.target != buttonNext &&
    e.target != buttonPrev.children[0] &&
    e.target != buttonNext.children[0]
  ) {
    return;
  }

  // Chercher quel button est actif :
  for (let i = 0; i < buttonsEvent.length; i++) {
    if (
      buttonsEvent[i].children[0].classList.contains("event__choice-active")
    ) {
      activeButtonSelector = buttonsEvent[i];
    }
  }
  console.log(activeButtonSelector);
  const ul = activeButtonSelector.querySelector("ul");
  const liList = ul.querySelectorAll("li");
  let activeLi;
  liList.forEach((li) => {
    if (li.children[0].classList.contains("dropdown-active")) {
      activeLi = li;
    }
  });

  if (e.target == buttonPrev || e.target == buttonPrev.children[0]) {
    let liToBeActive;
    if (activeLi == ul.children[0]) {
      liToBeActive = ul.children[ul.children.length - 1];
      console.log(liToBeActive);
      liToBeActive.children[0].classList.add("dropdown-active");
      liToBeActive.children[0].ariaCurrent = "true";
    } else {
      liToBeActive = activeLi.previousElementSibling;
      console.log(liToBeActive);
      liToBeActive.children[0].classList.add("dropdown-active");
      liToBeActive.children[0].ariaCurrent = "true";
    }
    activeLi.children[0].classList.remove("dropdown-active");
    activeLi.children[0].ariaCurrent = "";
  }
  if (e.target == buttonNext || e.target == buttonNext.children[0]) {
    let liToBeActive;
    if (activeLi == ul.children[ul.children.length - 1]) {
      liToBeActive = ul.children[0];
      console.log(liToBeActive);
      liToBeActive.children[0].classList.add("dropdown-active");
      liToBeActive.children[0].ariaCurrent = "true";
    } else {
      liToBeActive = activeLi.nextElementSibling;
      console.log(liToBeActive);
      liToBeActive.children[0].classList.add("dropdown-active");
      liToBeActive.children[0].ariaCurrent = "true";
    }
    activeLi.children[0].classList.remove("dropdown-active");
    activeLi.children[0].ariaCurrent = "";
  }
});
buttonsEvent.forEach((button) => {
  button.addEventListener("click", (e) => {
    const ulEvent = button.querySelector("ul");

    // Si l'utilisateur n'a pas encore cliqué sur un livre :
    if (!button.children[0].classList.contains("event__choice-active")) {
      for (let i = 0; i < buttonsEvent.length; i++) {
        if (
          buttonsEvent[i].children[0].classList.contains("event__choice-active")
        ) {
          buttonsEvent[i].children[0].classList.remove("event__choice-active");
        }
      }
      button.children[0].classList.add("event__choice-active");

      carousel.textContent = "";
      ulEvent.children[0].children[0].classList.add("dropdown-active"); // Selectionne le tout premier de la liste

      switch (button.children[0].dataset.night) {
        case "1":
          for (let i = 0; i < jsonStories[0].FirstNight.length; i++) {
            carousel.appendChild(
              createStoryElement(jsonStories[0].FirstNight, i)
            );
          }
          break;
        case "2":
          for (let i = 0; i < jsonStories[1].SecondNight.length; i++) {
            carousel.appendChild(
              createStoryElement(jsonStories[1].SecondNight, i)
            );
          }
          break;
        case "3":
          for (let i = 0; i < jsonStories[2].LastNight.length; i++) {
            carousel.appendChild(
              createStoryElement(jsonStories[2].LastNight, i)
            );
          }
          break;
      }
    }

    ulEvent.addEventListener("click", (e) => {
      removeActiveLi(ulEvent);
      e.target.classList.add("dropdown-active");
    });
  });
});

function createStoryElement(jsonStory, i) {
  const grandParent = document.createElement("div");
  grandParent.classList.add(
    "carousel__story",
    "carousel-item",
    "w-100",
    "h-100"
  );
  if (i == 0) {
    grandParent.classList.add("active");
  }

  const parent = document.createElement("div");
  parent.classList.add(
    "h-100",
    "p-3",
    "d-flex",
    "flex-column",
    "justify-content-between"
  );

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("text-center", "mt-5");
  parent.appendChild(titleContainer);

  const title = document.createElement("h5");
  title.classList.add("fs-2");
  title.textContent = jsonStory[i].title;
  titleContainer.appendChild(title);

  const pDate = document.createElement("p");
  pDate.textContent = jsonStory[i].date;
  title.after(pDate);

  const pStory = document.createElement("p");
  pStory.classList.add("p-4", "p-sm-5", "m-1");
  pStory.textContent = jsonStory[i].story;
  titleContainer.after(pStory);

  const endContainer = document.createElement("div");
  endContainer.classList.add("ps-5", "m-1");
  pStory.after(endContainer);

  const pMJ = document.createElement("p");
  pMJ.textContent = "MJ: " + jsonStory[i].MJ;
  endContainer.appendChild(pMJ);

  const pPlaces = document.createElement("p");
  pPlaces.textContent = "Places: " + jsonStory[i].places;
  pMJ.after(pPlaces);

  const pID = document.createElement("p");
  pID.classList.add("text-end", "p-0", "pe-5");
  pID.textContent = jsonStory[i]._id;
  pPlaces.after(pID);

  grandParent.appendChild(parent);

  return grandParent;
}

function removeActiveLi(ul) {
  for (let i = 0; i < ul.children.length; i++) {
    let li = ul.children[i];
    let button = li.children[0];
    if (button.classList.contains("dropdown-active")) {
      button.classList.remove("dropdown-active");
    }
  }
}
