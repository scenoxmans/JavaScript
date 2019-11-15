
let play = document.getElementById('play');
document.getElementById("play").addEventListener("click", main);
const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";
const SNAKE_COLOUR = document.getElementById("colors").value;
const SNAKE_BORDER_COLOUR = 'darkgreen';
const FOOD_COLOUR = 'red';
const FOOD_BORDER_COLOUR = 'darkred';
let snake = [{x: 150, y: 150},{x: 140, y: 150},{x: 130, y: 150},{x: 120, y: 150},{x: 110, y: 150}]
let score = 0;
let dx = 10;
let dy = 0;
let leaderboard =[{"name":"Garry","playerscore":69}, {"name":"Jimmy","playerscore":51}, {"name":"Timmy","playerscore":9}]
localStorage.setItem("leaderboard",JSON.stringify(leaderboard))

var gameCanvas = document.getElementById("canvas");
var ctx = gameCanvas.getContext("2d");
ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
ctx.strokestyle = CANVAS_BORDER_COLOUR;
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
//Onload function leaderboard
window.onload = function(){
  document.getElementById("first").innerHTML =JSON.parse(localStorage.getItem("leaderboard"))[0].name +", " + JSON.parse(localStorage.getItem("leaderboard"))[0].playerscore;
  document.getElementById("second").innerHTML =JSON.parse(localStorage.getItem("leaderboard"))[1].name +", " + JSON.parse(localStorage.getItem("leaderboard"))[1].playerscore;
  document.getElementById("third").innerHTML =JSON.parse(localStorage.getItem("leaderboard"))[2].name +", " + JSON.parse(localStorage.getItem("leaderboard"))[2].playerscore;
  drawSnake();
  createFood();
  drawFood();
}    
//Music option
    let musicbut = document.getElementById('music');
    let musicon = false;
    musicbut.onclick = togglemusic;
function togglemusic(){
  if (musicon == true) {
   musicon = false;
   document.getElementById('themeSong').pause();
  }
  else {
  musicon = true;
  document.getElementById('themeSong').play();
  }
 };

// Start game
main();
// Create food
createFood();
// evenListener for when key is pressed
document.addEventListener("keydown", changeDirection);
function main() {
  if (didGameEnd()) return;
  setTimeout(function onTick() {
    clearCanvas();
    drawFood();
    advanceSnake();
    drawSnake();
    // Call main again
    main();
  }, 100)
}

//Create canvas
function clearCanvas() {
  ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
  ctx.strokestyle = CANVAS_BORDER_COLOUR;
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}
//Color option
document.getElementById("colors").addEventListener('input',color)
    
function color(){
    switch (document.getElementById("colors").value) {
        case "green":
            color ="lightgreen";
            drawSnake();
        break;
    
        case "black":
            color ="black";
            drawSnake();
        break;
        case "white":
            color = "white";
            drawSnake();
        break;
        case "red":
            color ="red";
            drawSnake();                
        break;
        case "orange":
            color ="orange";
            drawSnake();
        break;     
        case "brawn":
            color ="brawn";
            drawSnake();
        break;                       
    }
}
// if snake touches itself
function didGameEnd() {
  for (let i = 4; i < snake.length; i++) {
    const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y
    if (didCollide) return true 
  }
}
function drawFood() {
  ctx.fillStyle = FOOD_COLOUR;
  ctx.strokestyle = FOOD_BORDER_COLOUR;
  ctx.fillRect(foodX, foodY, 10, 10);
  ctx.strokeRect(foodX, foodY, 10, 10);
}
function advanceSnake() {
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);
  const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
  if (didEatFood) {
    // Increase score
    score += 1;
    // Display score on screen
    document.getElementById('score').innerHTML = score;
    // Generate new food location
    createFood();
  } else {
    // Remove the last part of snake body
    snake.pop();
  }
  // If snake touches the wall 
 if (head.x > 290){
     head.x = 0;
 }
 if(head.y > 290){
     head.y = 0;
 }
 if(head.x < 0){
    head.x = 290;
 }
 if (head.y < 0){
     head.y = 290
 }
}
function randomTen(min, max) {
  return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}
//generate food
function createFood() {
  foodX = randomTen(0, gameCanvas.width - 10);
  foodY = randomTen(0, gameCanvas.height - 10);
  snake.forEach(function isOnSnake(part) {
    if (part.x == foodX && part.y == foodY) createFood();
  });
}
//draw snake
function drawSnake() {
  snake.forEach(drawSnakePart)
}
function drawSnakePart(snakePart) {
  ctx.fillStyle = SNAKE_COLOUR;
  ctx.strokestyle = SNAKE_BORDER_COLOUR;
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function changeDirection(event) {
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;
  const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;
  if (keyPressed === LEFT_KEY && !goingRight) {
    dx = -10;
    dy = 0;
  }
  if (keyPressed === UP_KEY && !goingDown) {
    dx = 0;
    dy = -10;
  }
  if (keyPressed === RIGHT_KEY && !goingLeft) {
    dx = 10;
    dy = 0;
  }
  if (keyPressed === DOWN_KEY && !goingUp) {
    dx = 0;
    dy = 10;
  }
}
