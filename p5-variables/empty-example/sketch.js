var diam2=0

let bgColor = 0;
let ellipseColor = 0;
let squareColor = 0;

function setup() { 
  createCanvas(2040,1000);
  bgColor = random("#000044");
  background("#000044");
  strokeWeight(3);
} 

function draw() {
if (mouseIsPressed) { 
  background(bgColor);
  noStroke();
  fill(ellipseColor);
  noStroke();
  fill("#663366");
  stroke("#99ff66");
  stroke("#663366");
  stroke("#99ff66");
  bgColor = color(random(255), random(255), random(255));
  ellipseColor = color(random(255), random(255), random(255));
 } else {
 }
  line(mouseX, mouseY,50,100,20,20,random(255), random(255), random(255));
  ellipse(mouseX, mouseY,200,200,20,20,random(255), random(255), random(255));
  ellipseColor = color(random(255), random(255), random(255));
    
{
 
  diam1=diam=+5}

}