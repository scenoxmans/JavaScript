let play = document.getElementById("play");
    play.addEventListener("click", playGame);
    let players = document.getElementById("players");
    players.addEventListener("change", changeGame);
    let p1choice = document.getElementById("p1choice");
    let p2choice = document.getElementById("p2choice");
    let choices = ["Rock", "Paper", "Scissors"];
    for (choice of choices) {
        let element = document.createElement("option");
        element.value = choice;
        element.innerHTML = choice;
        p1choice.append(element);
    }
    for (choice of choices) {
        let element = document.createElement("option");
        element.value = choice;
        element.innerHTML = choice;
        p2choice.append(element);
    }
    function playGame(event){
        let p1value = p1choice.value;
        let p2value;
        if (p2choice.disabled === false) {
            p2value = p2choice.value;
            mansur(p1value, p2value);
        }
        else {
            p2value = choices[Math.floor(Math.random()*choices.length)];
            mansur(p1value, p2value);
        }
    }
    function changeGame(event){
        if (players.value === "1") {
            p2choice.disabled = true;
        }
        else {
            p2choice.disabled = false;
        }
    }
    function mansur(p1,p2){
////////////////////////////////////////////// DRAW ///////////////////////////////////////////////////////////////////
    if (p1 == p2) { 
        document.getElementById("result").innerHTML= "<span style = color:red>D</span>RA<span style = color:blue>W</span>";
    }
//////////////////////////////////////////// Player 1 Wins //////////////////////////////////////////////////////////        
    else if (p1 == "Rock" && p2 == "Scissors"){
    document.getElementById("result") .innerHTML= "<span style = color:red>Player 1</span>  <span style = color: white>-crushed- </span> <span style = color:blue>Player 2</span>";
    }
    else if (p1 == "Scissors" && p2 == "Paper"){
        document.getElementById("result") .innerHTML= "<span style = color:red>Player 1</span> -stabbed- <span style = color:blue>Player 2</span>";
    }
    else if (p1 == "Paper" && p2 == "Rock"){
        document.getElementById("result") .innerHTML= "<span style = color:red>Player 1</span> -slapped- <span style = color:blue>Player 2</span>";
    }
//////////////////////////////////////////// Player 2 Wins //////////////////////////////////////////////////////////   
    else if (p1 == "Paper" && p2 == "Scissors"){
        document.getElementById("result") .innerHTML= "<span style = color:blue>Player 2</span> -slapped- <span style = color:red>Player 1</span>";
    }
    else if (p1 == "Scissors" && p2 == "Rock"){
        document.getElementById("result") .innerHTML= "<span style = color:blue>Player 2</span> -crushed- <span style = color:red>Player 1</span>";
    }
    else if (p1 == "Rock" && p2 == "Paper") {
        document.getElementById("result") .innerHTML= "<span style = color:blue>Player 2</span> -slapped- <span style = color:red>Player 1</span>";
    }
}