class ElementNav {
  constructor(
    target,
    className,
    parent,
    id,
    text,
    img,
    src,
    alt
  ) {
    this.target = target;
    this.className = className;
    this.parent = parent;
    this.id = id;
    this.text = text;
    this.img = img;
    this.src = src;
    this.alt = alt;
  }
  setElement() {
    for (let i = 0; i < this.className.length; i++) {
      console.log(this.className[i]);
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
    if (this.img == true) {
      this.target.src = this.src;
      this.target.alt = this.alt;
    }
  }
}

const header = document.querySelector("header");
const headerElement = new ElementNav(
  header,
  ["header__nav","position-fixed", "d-flex", "justify-content-center", "align-content-end"]);
const buttonNav = document.createElement("button");
const ButtonElement = new ElementNav(buttonNav, ["button-nav","mt-4","d-flex","rounded-3","bg-dark"],header);
const pNav = document.createElement("p");
const PNavElement = new ElementNav(
  pNav,
  ["my-2", "ms-2", "text-light", "align-self-center"],
  buttonNav,
  "p-menu",
  "MENU",
);
const imgNav = document.createElement("img");
const imgElement = new ElementNav(
  imgNav,
  "",
  buttonNav,
  "dice-button",
  undefined,
  true,
  "../../img_modif/black_dice-min-min.png",
  "Dé blanc menu"
);
const createdElement = [headerElement, ButtonElement, PNavElement, imgElement];

for (let i = 0; i < createdElement.length; i++) {
  createdElement[i].setElement();
}
const divNav = document.createElement('div');
const divElement = new ElementNav(
  divNav, 
  ['nav-down', 'd-flex', 'justify-content-center', 'bg-dark']
)
const navTag = document.createElement('nav');
const navElement = new ElementNav(
  navTag,
  ['fs-5', 'text-center', 'my-auto', 'w-100'],
  divNav
)
const ul = document.createElement('ul');
const ulElement = new ElementNav(
  ul,
  ['nav', 'flex-column']
);
