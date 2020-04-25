var diam2=0

function setup() {
  createCanvas(2040,1000);
  background("#000044");
  strokeWeight(2);
}

function draw() {
  if (mouseIsPressed) {
    fill("#663366");
    stroke("#99ff66");
    stroke("#663366");
    stroke("#99ff66");
  } else {
    
  }
  line(mouseX, mouseY,50,100,20,20);
  ellipse(mouseX, mouseY,200,200,20,20);
  diam1=diam=+5
}