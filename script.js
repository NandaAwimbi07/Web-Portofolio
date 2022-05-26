var i = 0,
  text1;
text1 = "Nanda Awimbi Yahya Pratama";

function mengetik() {
  if (i < text1.length) {
    document.getElementById("text1").innerHTML += text1.charAt(i);
    i++;

    setTimeout(mengetik, 350);
    loop: true;
  }
}
mengetik();

var typed = new Typed(".typing-text", {
  strings: [" ", "Web Designer", "Mobile Developer", "Content Creator", "Gamers"],
  loop: true,
  typeSpeed: 150,
});

// import * as THREE from "https://cdn.skypack.dev/three@0.122.0/build/three.module.js";
