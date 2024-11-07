// Generowanie losowych liczb globalnie
var number1 = randomNumber();
var number2 = randomNumber();

function randomNumber() {
    return Math.floor(Math.random() * 6 + 1);
}

function changeDice1() {
    console.log(number1);
    document.querySelector(".img1").setAttribute("src", "images/dice" + number1 + ".png");
}

function changeDice2() {
    console.log(number2);
    document.querySelector(".img2").setAttribute("src", "images/dice" + number2 + ".png");
}

function changeHeading() {
    if (number1 === number2) {
        document.querySelector("h1").textContent = "Draw";
    } else if (number1 > number2) {
        document.querySelector("h1").textContent = "Player 1 Wins";
    } else {
        document.querySelector("h1").textContent = "Player 2 Wins";
    }
}

// Wywołanie funkcji
changeDice1();
changeDice2();
changeHeading();