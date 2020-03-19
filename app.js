let userScore = 0;
let aiScore = 0;
const userScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getAiChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function convertToWord (letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    else return "Scissors";
}

function win(userChoice, aiChoice) {
    const smallUserWord = "user".fontsize(5).sup();
    const smallAiWord = "ai".fontsize(5).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} thumps ${convertToWord(aiChoice)} ${smallAiWord}  You win! 🔥 `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, aiChoice) {
    const smallUserWord = "user".fontsize(5).sup();
    const smallAiWord = "ai".fontsize(5).sup();
    const userChoice_div = document.getElementById(userChoice);
    aiScore++;
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} falls to ${convertToWord(aiChoice)} ${smallAiWord}  You lose... 😧 `;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, aiChoice) {
    const smallUserWord = "user".fontsize(5).sup();
    const smallAiWord = "ai".fontsize(5).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals ${convertToWord(aiChoice)} ${smallAiWord}  You drew. 🏌️ `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game (userChoice) {
    const aiChoice = getAiChoice();
    console.log ("User => " + userChoice);
    console.log ("AI => " + aiChoice);
    switch (userChoice + aiChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, aiChoice);
            break;
        case "rp":
        case "ps":
        case "pr":
        case "sr":
            lose(userChoice, aiChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, aiChoice);
            break;
    }
}

function main () {
rock_div.addEventListener('click', () => game ("r"));

paper_div.addEventListener('click', () => game ("p"));

scissors_div.addEventListener('click', () => game ("s"));
}

main();