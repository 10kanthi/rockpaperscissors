// DOM variables

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter  === "r") return "Rock";
    if (letter  === "p") return "Paper";
    return "Scissors"
}

function win(userChoice, computerChoice) {
    const smUserWord = "user".fontsize(3).fontcolor("green").sub();
    const smCompWord = "computer".fontsize(3).fontcolor("red").sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    
    result_p.innerHTML = `${convertToWord(userChoice)}${smUserWord} BEATS ${convertToWord(computerChoice)}${smCompWord}  ...You WIN!!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(()=> document.getElementById(userChoice).classList.remove('green-glow'), 400);

}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smUserWord = "user".fontsize(3).fontcolor("red").sub();
    const smCompWord = "computer".fontsize(3).fontcolor("green").sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smUserWord} LOSES TO ${convertToWord(computerChoice)}${smCompWord}  ...You LOST!!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 400);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smUserWord = "user".fontsize(3).fontcolor("green").sub();
    const smCompWord = "computer".fontsize(3).fontcolor("green").sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smUserWord} EQUALS ${convertToWord(computerChoice)}${smCompWord}  ...IT IS A DRAW :)`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(()=> document.getElementById(userChoice).classList.remove('grey-glow'), 400);
}

function game(userChoice) {
    const computerChoice = getCompChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        // console.log("USER WINS");
        win(userChoice, computerChoice);
        break;

        case "rp":
        case "ps":
        case "sr":
        // console.log("USER LOSES");
        lose(userChoice, computerChoice);
        break;

        case "rr":
        case "pp":
        case "ss":
        // console.log("Its a draw.");
        draw(userChoice, computerChoice);
        break;
    }
}


function main(){
    rock_div.addEventListener('click', () => game("r"));
    
    paper_div.addEventListener('click',() => game("p"));
    
    scissors_div.addEventListener('click',() => game("s"));

}

main();




