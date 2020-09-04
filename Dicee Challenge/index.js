var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2);

var diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

document.querySelector(".dice .img1").setAttribute("src", diceImages[randomNumber1]);
document.querySelector(".dice .img2").setAttribute("src", diceImages[randomNumber2]);

if (randomNumber1 > randomNumber2)
{
  document.getElementById("title").innerHTML = "Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1)
{
  document.getElementById("title").innerHTML = "Player 2 Wins!";
}

else
{
  document.getElementById("title").innerHTML = "Draw!";
}
