function playGame() {

    /* Underneath we are giving an option to begin */

    if (confirm("Want to play rock, paper and scissor?")) {
        alert("Great!");
        rpsGame();
    } else {
        alert("No problem, see you later then!");
    }

    /* Underneath we have the begging of the game */
    function rpsGame() {
        var user = prompt("Pick One: Rock, Paper or Scissors?");
        var userAnswer = user.toLowerCase();

        /* Underneath we have the computer picking */

        var someNumber = Math.random();
        var improvedNumber = (someNumber * 3) + 1;
        var finalNumber = Math.floor(improvedNumber);

        /* Underneath we have all the options for if the user */

        if (userAnswer === "rock" || "paper" || "scissor") {
            if (userAnswer === "rock" && finalNumber === 1) {
                alert("I have Rock! It's a tie! Let's go again.");
            } else if (userAnswer === "rock" && finalNumber === 2) {
                alert("I have Paper! I win.");
            } else if (userAnswer === "rock" && finalNumber === 3) {
                alert("I have Scissor! Shoot ya beat me this time.");
            }
            if (userAnswer === "paper" && finalNumber === 1) {
                alert("I have Rock! Shoot ya beat me this time.");
            } else if (userAnswer === "paper" && finalNumber === 2) {
                alert("I have Paper! It's a tie! Let's go again.");
            } else if (userAnswer === "paper" && finalNumber === 3) {
                alert("I have Scissor! I win.");
            }
            if (userAnswer === "scissor" && finalNumber === 1) {
                alert("I have Rock! I win");
            } else if (userAnswer === "scissor" && finalNumber === 2) {
                alert("I have Paper! Shoot ya beat me this time.");
            } else if (userAnswer === "scissor" && finalNumber === 3) {
                alert("I have Scissor! It's a tie! Let's go again.");

            } else {
                alert("Hope you enjoyed the game let's play again later!");
            }
        }
    }
}

playGame();
