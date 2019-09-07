
var a = Math.floor(Math.random() * 6) + 1;//1 - 6
var randomDiceImage1 = "images/dice" + a + ".png";//images/dice1.png - images/dice6.png

var b = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + b + ".png";

var c = Math.floor(Math.random() * 6) + 1;
var randomDiceImage3 = "images/dice" + c + ".png";

var d = Math.floor(Math.random() * 6) + 1;
var randomDiceImage4 = "images/dice" + d + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImage1);

document.querySelector(".img2").setAttribute("src", randomDiceImage2);

document.querySelector(".img3").setAttribute("src", randomDiceImage3);

document.querySelector(".img4").setAttribute("src", randomDiceImage4);

var max1 = Math.max(a, b);
var max2 = Math.max(c, d);


if ((a>b)&&(a>c)&&(a>d)) {
    document.querySelector("h1").innerHTML = "Player 1 Winner 🏆";
} if ((b>a)&&(b>c)&&(b>d)) {
    document.querySelector("h1").innerHTML = "Player 2 Winner 🏆";
} if ((c>a)&&(c>b)&&(c>d)) {
    document.querySelector("h1").innerHTML = "Player 3 Winner 🏆";
} if ((d>a)&&(d>b)&&(d>c)) {
    document.querySelector("h1").innerHTML = "Player 4 Winner 🏆";
} if (max1===max2) {
    document.querySelector("h1").innerHTML = "Draw!🏳️";
}
