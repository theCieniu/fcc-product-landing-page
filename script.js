// ROSSA FLORIST TYPING EFFECT H1

var i = 0;
text = "Welcome to the Rossa Florist";

function typing() {
    if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

typing()


//


let burger = document.getElementById("burger");
let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");

burger.addEventListener("click", opened);

overlay.addEventListener("click", closed);

menu.addEventListener("click", closed);

function opened() {
  overlay.classList.remove("opennav");
  menu.classList.remove("opennav");
  burger.classList.add("opennav");
  console.log("open")
}

function closed() {
  overlay.classList.add("opennav");
  menu.classList.add("opennav");
  burger.classList.remove("opennav");
  console.log("closednav")
}
