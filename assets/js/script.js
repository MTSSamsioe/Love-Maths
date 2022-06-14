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
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame(){
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);
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

function displayAdditionQuestions() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}