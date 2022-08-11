class ElementNav {
  constructor(
    target,
    className,
    width,
    zIndex,
    id,
    text,
    parent,
    img,
    src,
    alt
) {
    this.target = target;
    this.className = className;
    this.width = width;
    this.zIndex = zIndex;
    this.id = id;
    this.text = text;
    this.parent = parent;
    this.img = img;
    this.src = src;
    this.alt = alt;
  }
  setElement() {
    for (let i = 0; i < this.className.length; i++) {
      console.log(this.className[i]);
      this.target.classList.add(this.className[i]);
    }
    console.log(this);
    console.log(this.width);
    if (this.width != undefined) {
      this.target.style.width = this.width;
    }
    if (this.zIndex != undefined) {
      this.target.style.zIndex = this.zIndex;
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
    if (this.parent != undefined) {
      this.parent.appendChild(this.target);
    }
  }
}

const header = document.querySelector("header");
const headerElement = new ElementNav(
  header,
  ["position-fixed", "d-flex", "justify-content-center", "align-content-end"],
  "20%",
  "10"
);
headerElement.setElement();
const buttonNav = document.createElement("button");
const ButtonElement = new ElementNav(
  buttonNav,
  ["button-nav", "mt-4", "d-flex", "rounded-3", "bg-dark"],
  undefined,
  undefined,
  undefined,
  undefined,
  header
);
const pNav = document.createElement("p");
const PNavElement = new ElementNav(
  pNav,
  ["my-2", "ms-2", "text-light", "align-self-center"],
  undefined,
  undefined,
  "p-menu",
  "MENU",
  buttonNav
);
ButtonElement.setElement();
PNavElement.setElement();
const imgNav = document.createElement("img");
const imgElement = new ElementNav(
  imgNav,
  "",
  undefined,
  undefined,
  "dice-button",
  undefined,
  buttonNav,
  true,
  "../../img_modif/black_dice-min-min.png",
  "Dé blanc menu"
);
imgElement.setElement();
