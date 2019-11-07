let field = document.getElementById("field");
let standard = document.getElementById("generate");
let random = document.getElementById("random");
let restart = document.getElementById("restart");
let game = document.getElementById("play");

game.addEventListener("click", playgame);
standard.addEventListener("click", generateField);
restart.addEventListener("click", reset);
random.addEventListener("click", colorize);
function generateField() {
    field.innerHTML="";
    let a;
    var b;
    b = true;
for (a = 1; a <= 64; a++)
     {
        if (b === false) {
            field.innerHTML += "<div class='cell'>" + a + "</div>";
            if (a % 8 !== 0) {
                b = true;
            }
        }
        else {
            field.innerHTML += "<div class='cell bgblack'>" + a + "</div>";
            if (a%  8 !== 0) {
                b = false;
            }
        }
    }
}
function colorize() {
    for (item of field.children) {
        if (!(item.classList.contains("cell bgblack"))) {
            var r = Math.floor(Math.random() * 250);
            var g = Math.floor(Math.random() * 250);
            var b = Math.floor(Math.random() * 250);
            var bgColor = "rgb(" + r + "," + g + "," + b + ")";
            item.style.backgroundColor = bgColor;
        }
    }
}
function reset() {
    field.innerHTML="";
}
function playgame(){
    
        let stopanimation = document.getElementById("stop"); 
        stopanimation.addEventListener("click", stopthis);    
        const staggerVisualizerEl = document.querySelector('#field');
        const fragment = document.createDocumentFragment();
        const grid = [17, 17];
        const col = grid[0];
        const row = grid[1];
        const numberOfElements = col * row;

                for (let i = 0; i < numberOfElements; i++) {
                fragment.appendChild(document.createElement('div'));
                }

        staggerVisualizerEl.appendChild(fragment);

        const staggersAnimation = anime.timeline({
        targets: '#field div',
        easing: 'easeInOutSine',
        delay: anime.stagger(50),
        loop: false,
        autoplay: false
        })
        
        .add({
        translateX: 0,
        translateY: 0,
        scale: .5,
        scaleX: 1,
        rotate: 360,
        duration: 1000,
        delay: anime.stagger(100, {grid: grid, from: 'center'})
        })
        .add({
        scaleY: 1,
        scale: 1,
        delay: anime.stagger(20, {grid: grid, from: 'center'})
        })    
        staggersAnimation.play();     
        function stopthis(){
        staggersAnimation.reverse();
        }
    }