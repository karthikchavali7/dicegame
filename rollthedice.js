function rollthedice() {
    var randomnumber1 = Math.floor(Math.random() * 6)+1 ;
    var randomnumber2 = Math.floor(Math.random() * 6) +1;
    document.querySelector(".img1").setAttribute("src", "dice" + randomnumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "dice" + randomnumber2 + ".png");
    if (randomnumber1===randomnumber2) {
        document.querySelector("h1").innerHTML = "!DRAW";
    }
    else if (randomnumber1 < randomnumber2) {
        document.querySelector("h1").innerHTML = "player2 wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "player1 wins!";
    }
}
