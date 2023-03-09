/*
Kahlan Newsom
NMD 105
A3Q2: Click to change your catcher
Added a conditional to my sprites function so that when the mouse is pressed the pup grows.
*/

function setup() {
  // ADD CONSTANT VARIABLES
  // Set values here that don't change over the course of the game,
  // but are convenient to name as variables because they are used
  // throughout the code. Eg, "groundY" could be the height of the ground.

  // ADD CHANGING VARIABLES
  // Set an initial value for variables here that may change later.
  // Eg, "birdX = 0" could start the catcher at the canvas' left edge.
  // "seedIsFalling = false" could ensure it doesn't fall until triggered.

  // Set up the canvas.
  createCanvas(400, 400);
  angleMode(DEGREES); // Use this to create shapes with arcs and degrees.
  colorMode(HSL);
  textAlign(CENTER);
}

function draw() {
  // BACKGROUND
  background("skyblue");
  noStroke();
  fill(120, 50, 50);
  rect(0, 350, 400, 50); //grass
  addDoghouse(0, 220);

  // ADD CATCHER
  push();
  translate(-20, 0);
  addDachshund(mouseX, 300, 0.75);
  pop();

  // ADD SEED
  // Add the falling shape, either directly here or via a function.
  // This code could include animating the fall, or checking for conditions.
}

// CATCHER
function addDachshund(translateX, translateY, size) {
  push();
  translate(translateX, translateY);
  scale(size);
  if (mouseIsPressed) {
    scale(1.05);
    translate(0, -5);
  }
  noStroke();
  fill(42, 80, 30); //main color
  ellipse(127, 86, 4, 20); //right legs
  ellipse(80, 86, 4, 20);
  ellipse(125, 93.5, 8, 4); //feet
  ellipse(78, 93.5, 8, 4);
  stroke(42, 80, 30); //main color
  strokeWeight(5);
  noFill();
  arc(135, 42, 40, 30, 10, 90); //tail
  noStroke();
  fill(42, 80, 30); //main color
  rect(50, 50, 90, 30, 30); //body
  shearX(20);
  ellipse(34, 50, 20, 30); //neck
  shearX(-20);
  ellipse(45, 42, 35, 30); //head
  shearX(-30);
  ellipse(65, 52, 30, 14); //snout
  shearX(30);
  noStroke();
  ellipse(115, 86, 4, 20); //left legs
  ellipse(67, 86, 4, 20);
  ellipse(112, 93.5, 8, 4); //feet
  ellipse(65, 93.5, 8, 4);
  stroke("black");
  fill(42, 80, 30);
  strokeWeight(1);
  arc(54, 44, 18, 40, -53, 254, OPEN); //ear
  fill("black");
  ellipse(34, 40, 4); //eye
  arc(22, 53, 7, 6, 120, 280); //nose
  noFill();
  arc(30, 54, 20, 8, 0, 90); //mouth
  pop();
}

function addDoghouse(translateX, translateY) {
  push();
  translate(translateX, translateY);
  noStroke();
  fill(0, 70, 50);
  rect(10, 60, 100, 80);
  triangle(10, 60, 60, 10, 110, 60);
  stroke(42, 80, 10);
  strokeWeight(8);
  line(5, 63, 60, 10);
  line(60, 10, 115, 63);
  noStroke();
  fill(42, 80, 13);
  rect(35, 80, 50, 60, 30, 30, 0, 0);
  fill(42, 70, 30);
  rect(30, 50, 60, 25);
  fill(100, 100, 100);
  textSize(10);
  text("DOG", 60, 60);
  text("HOUSE", 60, 71);
  fill(0, 0, 30);
  ellipse(32, 52, 3); //nails
  ellipse(88, 52, 3);
  ellipse(32, 73, 3);
  ellipse(88, 73, 3);
  pop();
}
