// Class pour créer les différents éléments qui composent le menu:

class ElementNav {
  constructor(target, className, parent, id, text, href, img, src, alt) {
    this.target = target;
    this.className = className;
    this.parent = parent;
    this.id = id;
    this.text = text;
    this.href = href;
    this.img = img;
    this.src = src;
    this.alt = alt;
  }
  setElement() {
    for (let i = 0; i < this.className.length; i++) {
      this.target.classList.add(this.className[i]);
    }
    if (this.parent != undefined) {
      this.parent.appendChild(this.target);
    }
    if (this.id != undefined) {
      this.target.id = this.id;
    }
    if (this.text != undefined) {
      this.target.textContent = this.text;
    }
    if (this.href != undefined) {
      this.target.href = this.href;
    }
    if (this.img == true) {
      this.target.src = this.src;
      this.target.alt = this.alt;
    }
  }
}

// Variables:
//// Ancre :
const header = document.querySelector("header");

//// Elements à créer sur l'html :
///// Dans le header:
const buttonNav = document.createElement("button");
const pNav = document.createElement("p");
const imgNav = document.createElement("img");

///// Dans la div juste derrière :
const divNav = document.createElement("div");
const navTag = document.createElement("nav");
const ul = document.createElement("ul");
///// A ajouter sous l'ul :

////// Dernier élément de la liste :
const liLast = document.createElement("li");
const aLast = document.createElement("a");
aLast.target = "__blank";
const i = document.createElement("i");

//// Création des différentes classes avec différentes  options:
/// Sous le modèle : target, className, parent, id, text, href, img, src, alt
const headerElement = new ElementNav(header, [
  "header__nav",
  "position-fixed",
  "d-flex",
  "justify-content-center",
  "align-content-end",
]);
const ButtonElement = new ElementNav(
  buttonNav,
  [
    "button-nav",
    "mt-4",
    "d-flex",
    "rounded-3",
    "bg-dark",
    "text-light",
    "px-1",
  ],
  header
);
const PNavElement = new ElementNav(
  pNav,
  ["my-2", "ms-2", "align-self-center"],
  buttonNav,
  "p-menu",
  "MENU"
);
const imgElement = new ElementNav(
  imgNav,
  "",
  buttonNav,
  "dice-button",
  undefined,
  undefined,
  true,
  "./img/black_dice-min-min.webp",
  "Dé blanc menu"
);
const divElement = new ElementNav(divNav, [
  "nav-div",
  "nav-up",
  "d-flex",
  "justify-content-center",
  "bg-dark",
]);
const navElement = new ElementNav(
  navTag,
  ["fs-5", "text-center", "my-auto", "w-100"],
  divNav
);
const ulElement = new ElementNav(ul, ["nav", "flex-column"], navTag);
initMultipleLi();
const liLastElement = new ElementNav(
  liLast,
  ["py-4", "nav-item", "position-relative"],
  ul
);
const aLastElement = new ElementNav(
  aLast,
  ["nav-link", "link-light"],
  liLast,
  undefined,
  "",
  "https://www.facebook.com/desaventures"
);
const iElement = new ElementNav(
  i,
  ["fa-brands", "fa-facebook", "fa-2xl"],
  aLast
);
const createdElement = [
  headerElement,
  ButtonElement,
  PNavElement,
  imgElement,
  divElement,
  navElement,
  ulElement,
  liLastElement,
  aLastElement,
  iElement,
];

// Fonction :

for (let i = 0; i < createdElement.length; i++) {
  createdElement[i].setElement();
}
function initMultipleLi() {
  const hrefList = [
    "../index.html#home",
    "../index.html#presentation",
    "../event-contact.html#pre-event",
    "../event-contact.html#contact",
  ];
  const textAList = ["Accueil", "Présentation", "Soirées", "Contact"];
  for (let i = 0; i < hrefList.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let span = document.createElement("span");

    let liElement = new ElementNav(
      li,
      ["py-2", "nav-item", "position-relative"],
      ul
    );
    let aElement = new ElementNav(
      a,
      ["nav-link", "link-light"],
      li,
      undefined,
      textAList[i],
      hrefList[i]
    );
    let spanElement = new ElementNav(
      span,
      ["position-absolute", "top-100", "start-50", "translate-middle"],
      a
    );
    let elementsList = [liElement, aElement, spanElement];

    for (let x = 0; x < elementsList.length; x++) {
      elementsList[x].setElement();
    }
  }
}

// Ajout de la div juste après header :
header.parentNode.insertBefore(divNav, header.nextSibling);

//_______________\\

// Animation du menu :

// Variable(s) :
const divWrap = document.querySelector(".wrap-container");
const problematicImg = document.querySelector("#problematic-img");

// Fonction(s):
buttonNav.addEventListener("click", () => {
  if (divNav.classList.contains("nav-up")) {
    divNav.classList.replace("nav-up", "nav-down");
    imgNav.classList.add("dice-rotate");
    if (window.innerWidth >= 1200) {
      setSizeBody("w-85", "w-100", "w-80");
    } else if (window.innerWidth >= 768) {
      setSizeBody("w-80", "w-100", "w-85");
      if (problematicImg != null) {
        problematicImg.classList.add("pb-5");
      }
    }
  } else {
    if (problematicImg != null) {
      problematicImg.classList.remove("pb-5");
    }
    divNav.classList.replace("nav-down", "nav-up");
    imgNav.classList.remove("dice-rotate");
    setSizeBody("w-100", "w-85", "w-80");
  }
});

function setSizeBody(desiredSize, firstSize, Secondsize) {
  let valueChange = [desiredSize, firstSize, Secondsize];
  for (let i = 1; i < valueChange.length; i++) {
    if (divWrap.classList.contains(valueChange[i])) {
      divWrap.classList.replace(valueChange[i], valueChange[0]);
    }
  }
}
