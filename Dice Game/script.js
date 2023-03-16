function playagain(){
 // random Number section
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let player1 = getRndInteger(1,7);
let player2 =getRndInteger(1,7);

// results section

let result = document.querySelector(".results");

if(player1 > player2){
    
    result.innerHTML="<h3>🚩 player 1 wins 😤</h3>"
}
else if (player1 == player2)
{
    result.innerHTML="<h3>Draw</h3>"
}else
{
   result.innerHTML="<h3>🏳 player 2 wins 😤</h3>"
}

// dice image Section

let dice1 = document.querySelector(".dice1");
let dice2 = document.querySelector(".dice2");

//dice 1 

if(player1 == 1)
{
    dice1.setAttribute("src", "images/dice1.png")
}else if (player1 == 2)
{
    dice1.setAttribute("src", "images/dice2.png")
}else if (player1 == 3)
{
    dice1.setAttribute("src", "images/dice3.png")
}else if (player1 == 4)
{
    dice1.setAttribute("src", "images/dice4.png")
}else if (player1 == 5)
{
    dice1.setAttribute("src", "images/dice5.png")
}else if (player1 == 6)
{
    dice1.setAttribute("src", "images/dice6.png")
}

// dice 2

if(player2 == 1)
{
    dice2.setAttribute("src", "images/dice1.png")
}else if (player2 == 2)
{
    dice2.setAttribute("src", "images/dice2.png")
}else if (player2 == 3)
{
    dice2.setAttribute("src", "images/dice3.png")
}else if (player2 == 4)
{
    dice2.setAttribute("src", "images/dice4.png")
}else if (player2 == 5)
{
    dice2.setAttribute("src", "images/dice5.png")
}else if (player2 == 6)
{
    dice2.setAttribute("src", "images/dice6.png")
}
}

