var number1 = randomNumber1();
var number2 = randomNumber2();

function randomNumber1() {
    return Math.floor(Math.random()* 6 + 1);
}

function randomNumber2() {
    return Math.floor(Math.random()* 6 + 1);
    
}

function changeDice1() {
    console.log(number1);

    if (number1 === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    }
    else if (number1 === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    }
    else if (number1 === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    }
    else if (number1 === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    }
    else if (number1 === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    }
    else if (number1 === 6) {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    } 
}

function changeDice2() {
    console.log(number2);

    if (number2 === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }
    else if (number2 === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    }
    else if (number2 === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    }
    else if (number2 === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    }
    else if (number2 === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }
    else if (number2 === 6) {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    } 
}

function changeHeading() {
    if (number1 === number2) {
        document.querySelector("h1").textContent = "Draw";
    }
    else if (number1 > number2) {
        document.querySelector("h1").textContent = "Player 1 Wins";
    }
    else if (number1 < number2) {
        document.querySelector("h1").textContent = "Player 2 Wins";
    }
}

changeDice1();
changeDice2();
changeHeading();
