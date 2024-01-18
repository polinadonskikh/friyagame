
document.querySelector("body > h1").innerHTML = "Collect all three to win!";

var randomNumber1 = Math.floor(Math.random() * 9) + 1; // 1-6
var randomImageSource = "images/friya"+ randomNumber1 +".png"; // images/dice1-dice6.png


var image1 = document.querySelector("body > div > div:nth-child(1) > img");

image1.setAttribute("src", randomImageSource);//заменяем картинку на рандомную из папки

var randomNumber2 = Math.floor(Math.random() * 9) + 1;
var randomImageSource2 = "images/friya"+ randomNumber2 +".png";


var image2 = document.querySelector("body > div > div:nth-child(2) > img");

image2.setAttribute("src", randomImageSource2);

var randomNumber3 = Math.floor(Math.random() * 9) + 1;
var randomImageSource3 = "images/friya"+ randomNumber3 +".png";


var image2 = document.querySelector("body > div > div:nth-child(3) > img");

image2.setAttribute("src", randomImageSource3);

if (randomNumber1 === randomNumber2 && randomNumber2 === randomNumber3) {
document.querySelector("body > p").innerHTML = "👑 JACKPOT 👑"
document.querySelector("body > h2").innerHTML = "YOU WON!"
document.querySelector("body > h1").innerHTML = "👑 JACKPOT 👑"
}
else {
  document.querySelector("body > p").innerHTML = "LOSER!"
  document.querySelector("body > h2").innerHTML = "TRY AGAIN!"
}
