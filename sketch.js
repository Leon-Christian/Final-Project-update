let mainspr; //Declaring sprite variables
let sprtw;
let sprthr;
// var win
// var lose

// function preload (){
//   win = loadSound("win.wav");
//   lose = loadSound("lose.wav");
// }

function setup() {
  createCanvas (500, 500);
 
  mainspr = createSprite(windowWidth-(windowWidth-50), windowHeight/3, 40, 40); //defining main sprite
    mainspr.shapeColor = color(255);
  sprtw = createSprite(random(50,500),random(60,450),30,30); //defining winning sprite
    sprtw.shapeColor = color (random(255),random(255), random(255));
    sprtw.mouseActive = true;

  sprthr = createSprite (random(50,500),random(60,450),30,30); //defining loosing sprite
    sprthr.shapeColor = color (random(255),random(255), random(255));
    sprthr.mouseActive = true;


}
function draw() {
  background(50);
  textSize(0);
if(sprtw.mouseIsOver) { //Clue #1 (winning)
  textSize(32);
    fill(255);
    textAlign(CENTER, TOP);
    text('This is the right choice',250,50);
}
if(sprthr.mouseIsOver) { //Clue #2 (loosing)
  textSize(32);
    fill(255);
    textAlign(CENTER, TOP);
    text('This is the wrong choice',250,50);
}

  if(mainspr.overlap(sprtw)){ //what happens when you win, the background changes, and "Correct" appears)
    // win.play();
    background (sprtw.shapeColor);
    mainspr.setSpeed(0, 0);
    textSize(32);
    fill(255);
    textAlign(CENTER, TOP);
    text('CORRECT',250,50);
  }
  else if (mainspr.overlap (sprthr)){ //what happens when you lose, the sprite changes, and "Game Over" appears"
    // lose.play();
    mainspr.setSpeed(0, 0);
    mainspr.shapeColor = (sprthr.shapeColor);
    textSize(32);
    fill(255);
    textAlign(CENTER, TOP);
    text('GAME OVER',250,50);

}
  drawSprites();
}
function keyPressed() { //controls to move the main sprite
  if (keyCode == RIGHT_ARROW) {
    mainspr.setSpeed(1.5, 0);
  }
    else if (keyCode == LEFT_ARROW) {
    mainspr.setSpeed(1.5, 180);
  }
  else if (keyCode == DOWN_ARROW) {
     mainspr.setSpeed(1.5, 90);
  }
   else if (keyCode == UP_ARROW) {
    mainspr.setSpeed(1.5, 270);
  }
  else if (key == ' ') {
    mainspr.setSpeed(0, 0);
  }
  return false;
}
