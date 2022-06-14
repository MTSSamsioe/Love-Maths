// wait for the  dom to finish loading  before running the game
// Get the button elements and add envent listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
            }
        });
    }

    runGame("addition");
});

/**
 * The main game "loop", called whwn the script is first loaded
 * and after the user´s anbswear has been processed
 */
function runGame(gameType){
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. aborting`;
    }
}

function checkAnswear () {

}

function calculateCorrectAnswear () {

}

function incrementAnswear() {

}

function incrementScore() {
    
}

function incrementWrongAnswear() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}