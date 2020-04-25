function setup() { 
   createCanvas(600, 400);   
   background("#7777ff");
}
function draw() {
   fill(255, 0, 0);                         // red rectangle   
   noStroke();   
   rect(100, 100, 150, 200);
   fill(255, 255, 0);                    //yellow
   ellipse(150, 150, 20, 20);    //eyes
   ellipse(180, 150, 20, 20);   
   stroke(255, 255, 0);            // mouth
   strokeWeight(5);   
   line(150, 200, 200, 200);       
   strokeWeight(0);               //text: no stroke
   textSize(20);   
   textFont("Arial");   
   textStyle(ITALIC);   
   textAlign(LEFT);   
   text("Smile... you are learning programming!", 100, 60);
   fill(255, 0, 0, 100);           // red fill with transparency
   ellipse(mouseX, mouseY, 50, 50);      //red circle for mouse          
 }
