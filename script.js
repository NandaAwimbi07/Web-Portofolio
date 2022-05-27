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
let canvasKita = document.getElementById("2dimensi");
canvasKita.width = 1355;
canvasKita.height = 250;
let ctx = canvasKita.getContext("2d");

let imageData = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);

function lingkaran(x, y, r, w, kanan, kiri, atas, bawah, speed) {
  this.x = x;
  this.atas = atas;
  this.y = y;
  this.bawah = bawah;
  this.r = r;
  this.kanan = kanan;
  this.w = w;
  this.kiri = kiri;
  this.render = function () {
    ctx.fillStyle = this.w;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();

    if (this.kanan) {
      this.x += speed;
    }
    if (this.kiri) {
      this.x -= speed;
    }
    if (this.atas) {
      this.y -= speed;
    }
    if (this.bawah) {
      this.y += speed;
    }

    if (this.y + this.r > canvasKita.height) {
      this.bawah = false;
      this.atas = true;
    } else if (this.y - this.r < 0) {
      this.bawah = true;
      this.atas = false;
    }

    if (this.x + this.r > canvasKita.width) {
      this.kanan = false;
      this.kiri = true;
    } else if (this.x - this.r < 0) {
      this.kanan = true;
      this.kiri = false;
    }
  };
}
let lingkaran1 = new lingkaran(250, 100, 60, "blue", false, true, true, false, 6);
let lingkaran2 = new lingkaran(50, 80, 55, "red", false, true, true, false, 8);
let lingkaran3 = new lingkaran(150, 50, 25, "black", true, false, false, true, 5);
let lingkaran4 = new lingkaran(100, 50, 50, "purple", false, true, false, true, 10);
let lingkaran5 = new lingkaran(150, 40, 20, "yellow", true, false, false, true, 9);
let lingkaran6 = new lingkaran(180, 90, 50, "green", true, false, true, false, 7);
let lingkaran7 = new lingkaran(160, 70, 40, "salmon", true, false, true, false, 11);
let lingkaran8 = new lingkaran(150, 80, 30, "white", true, false, true, false, 10);

//membuat animasi menggunkana build in
function animasi() {
  ctx.save();
  ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);
  ctx.globalAlpha = 0.8;
  lingkaran1.render();
  lingkaran2.render();
  lingkaran3.render();
  lingkaran4.render();
  lingkaran5.render();
  lingkaran6.render();
  lingkaran7.render();
  lingkaran8.render();
  ctx.restore();
}
setInterval(animasi, 10);
