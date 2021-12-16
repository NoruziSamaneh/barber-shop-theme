const myContainerItem = document.getElementById("navbarSupportedContent");
const myItems = myContainerItem.getElementsByClassName("my-nav-items");

for (let i = 0; i < myItems.length; i++) {
  myItems[i].addEventListener("click", respondClick);
  myItems[i].addEventListener("mouseover", respondMouseOver);
  // myItems[i].addEventListener("mouseleave", respondMouseLeave);
}

function respondClick() {
  let current = document.getElementsByClassName("active-item");
  current[0].className = current[0].className.replace(" active-item", "");
  this.className += " active-item";
}

function respondMouseOver() {
  let current = document.getElementsByClassName("hover-item");
  current[0].className = current[0].className.replace(" hover-item", "");
  this.className += " hover-item";
}

// function respondMouseLeave() {
// let current = document.getElementsByClassName("hover-item");
// current.className.replace(" hover-item");
// current[0].className = current[0].className.replace(" hover-item", "");
// this.className += "";
// }

