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
