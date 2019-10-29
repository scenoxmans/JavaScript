let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sk");
const cool_div = document.getElementById("cool");
function getcompChoice(){
    const choices = ["r", "p", "s", "l", "sk"];
    const randomNumber = Math.floor( Math.random()*5);
    return choices [randomNumber];
}

function convertToWord(letter){
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    if (letter == "s") return "Scissors";
    if (letter == "l") return "Lizard";
    if (letter == "sk") return "Spock";
}

function win(userChoice, compChoice) {

    const smallUserWord = "user". fontsize(3).sub();
    const smallCompWord = "comp". fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span. innerHTML = compScore;
    result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord} Beats ${convertToWord (compChoice)}${smallCompWord} You Win!`;
    cool_div.classList.add("popup");
    setTimeout(() => cool_div.classList.remove("popup"),300);
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"),300);

}
function lose(userChoice , compChoice) {
    
    const smallUserWord = "user". fontsize(3).sub();
    const smallCompWord = "comp". fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span. innerHTML = compScore;
    result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord} loses to ${convertToWord (compChoice)}${smallCompWord} You Lost...`;
    userChoice_div.classList.add("red-glow");
    setTimeout(function(){userChoice_div.classList.remove("red-glow")},300);
}

function draw(userChoice, compChoice) {

    const smallUserWord = "user". fontsize(3).sub();
    const smallCompWord = "comp". fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord} equals ${convertToWord (compChoice)}${smallCompWord} Its a draw...`;
    userChoice_div.classList.add("gray-glow");
    setTimeout(function(){userChoice_div.classList.remove("gray-glow")},300);
}



function game(userChoice){
    const compChoice = getcompChoice();
    switch(userChoice + compChoice){
        case "rs":
        case "rl":
        case "pr":
        case "psk":
        case "sp":
        case "sl":
        case "sks":
        case "skr":
        case "lsk":
        case "lp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "rsk":
        case "ps":
        case "pl":
        case "sr":
        case "ssk":
        case "skp":
        case "skl":
        case "lr":
        case "ls":
           lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "sksk":
        case "ll":
           draw(userChoice, compChoice);
            break;
      }
    }

function main(){
rock_div.addEventListener("click" , () => game("r"));
paper_div.addEventListener("click" , () => game("p"));
scissors_div.addEventListener("click" , () => game("s"));
lizard_div.addEventListener("click" , () => game("l"));
spock_div.addEventListener("click" , () => game ("sk"));
}
main();
