function setup(){
  createCanvas(400, 400); // 
  background(2); 
}

function draw(){
  if (mouseIsPressed){ // When the user presses the mouse
    stroke(255, 0, 0); // Use different colors for the two lines
    line(0, 0, width, height); // draw a line from the top-left corner to the bottom-right cornerof the canvas
  }
}

function mouseReleased(){ // When the user releases the mouse
  stroke(0, 0, 255); // Use different colors for the two lines
  line(width, 0, 0, height); // draw a line from the top-right corner to the bottom-left cornerof the canvas
}
