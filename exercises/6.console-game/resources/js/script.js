let attacksound = new Audio("resources/sound/attack.mp3");
let healsound = new Audio('resources/sound/heal.mp3');
let takingdmg = new Audio('resources/sound/taking-hit.mp3');
let gameOver = false;
let delayInMilliseconds = 1500;
sans = {
    "race": "Monster",
    "type": "Skeleton",
    "moves": ["attack", "heal"],
    "health": 1000,
    "attack": function() {
        
        // play sound if sound is on
        if (soundOn) {
            takingHit.play();
        }
        
        // make value attackPoints & criticalStrike
        let attackPoints = Math.floor(Math.random() * (15 - 10 + 1) + 10);
        let criticalStrike = Math.random() * 100;
        
        // If criticalStrike is between 75% and 99.99% double attackPoints
        if (criticalStrike >= 75) {
            attackPoints *= 2;
            
            // subtract attackpoints from PLAYER.health
            player.health -= attackPoints;
            
            // if PLAYER.health is zero or lower
            if (player.health <= 0) {
                // show result
                console.log("%cSANS attacks Critical Strike! -" + attackPoints + "\nPLAYER health: 0 \nSANS has won!", "color:#3498db;");
                gameOver = true;

                // do game restart function
                setTimeout(function() {
                    GameRestart();
                }, delayInMilliseconds);
                
            // if PLAYER.health is above zero
            } else {
                // show result
                console.log("%cSANS attacks Critical Strike! -" + attackPoints + "\nPLAYER health: " + player.health, "color:#3498db;");
            }
            
        // If criticalStrike is between 0% and 74.99% do normal attackPoints
        } else {
            // subtract attackpoints from PLAYER.health
            player.health -= attackPoints;
            
            if (player.health <= 0){
                // show result
                console.log("%cSANS attacks -" + attackPoints + "\nPLAYER health: 0 \nSANS has won!", "color:#3498db;");
                
                // do game restart function
                gameOver = true;
                setTimeout(function() {
                    GameRestart();
                }, delayInMilliseconds);
                
            } else {
                // show result
                console.log("%cSANS attacks -" + attackPoints + "\nPLAYER health: " + player.health, "color:#3498db;");   
            }
        }
    },
    "heal": function() {
        
        // play sound if sound is on
        if (soundOn) {
            heal.play();
        }
        
        // if player health is exactly 100
        if (this.health == 1000) {
            // attack instead
            sans.attack();
        // if player health is higher or lower than 100
        } else {
            // Generate healpoints
            let healPoints = Math.floor(Math.random() * (80 - 40 + 1) + 40);
            // add healpoints to SANS.health
            sans.health += healPoints;
            
            // if SANS.health is 1000 or higher
            if (sans.health >= 1000) {
                // change SANS.healh back to 1000
                sans.health =  1000;
                
                // show result
                console.log("%cSANS heals +" + healPoints +  "\nSANS health: max" + sans.health, "color:#3498db;");
            } else {
                // show result
                console.log("%cSANS heals +" + healPoints +  "\nSANS health: " + sans.health, "color:#3498db;");
            }
        }
    },
    // choose a random move for SANS
    "makeMove": function() {
        let move = this.moves[Math.floor(Math.random() * this.moves.length)];
        this[move]();
    }
}

// Restart Game
function GameRestart() {
    
    // if gameover = true => reset everything
    if (gameOver) {
        gameOver = false;
        player.health = 100;
        sans.health = 1000;
        randomPun(startpun);
        console.log("Game has reset, play again!");
    // if game over is not true
    } else {
        console.log("Game is not over yet!");
    }
}

lenin = {
    "race": "human", 
    "type" : "vladimir",
    "moves" : ["communisme", "vodkashot"],
    "health" : 100,
    "communisme" : function(){
        if (soundOn){
            attacksound.play();
        }
        let communisme =  Math.floor(Math.random()*(120 - 19)+20);
        let critattack = Math.random()*100;
            if(critattack >= 75){
            communisme *= 2
        }
          if  (lenin.health <= 0){
              console.log("%cLenin is dead!", "color:red")
          }
        
        console.log(communisme);
    },
    "vodkashot" : function(){
        if (soundOn){
            healsound.play();
        }
        if (lenin.health === 100){
            return("Comrade your body is strong you don't need healing");
        }
        let vodkashot = Math.floor(Math.random()*(10-2)+12);
        lenin.health += vodkashot;
        console.log( vodkashot+"%c HP was healed. \nLenin's health is "+ lenin.health, "color:red");
    }
}




