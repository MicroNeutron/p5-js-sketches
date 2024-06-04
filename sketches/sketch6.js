let colorlist = ['gold', 'yellow', 'turquoise', 'red', 'blue', 'green', 'purple', 'pink', 'orange', 'white'];

function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight);
  background(2);
}

function draw() {
  if (mouseButton === LEFT) { // When the user presses the mouse
    fill(random(colorlist)); // Use a different color for each circle
    circle(mouseX, mouseY, 10); // draw a series of concentric circles centered at the mouse position
    circle(mouseX, mouseY, 20); // draw a series of concentric circles centered at the mouse position
    circle(mouseX, mouseY, 30); // draw a series of concentric circles centered at the mouse position
    circle(mouseX, mouseY, 40); // draw a series of concentric circles centered at the mouse position
    circle(mouseX, mouseY, 50); // draw a series of concentric circles centered at the mouse position
  }

  for (let n = 0; n < 5; n++) { // Use a for loop
    fill(random(colorlist)); // Use a different color for each circle
    circle(mouseX, mouseY, n * 10); // to draw 5 concentric circles with increasing radii
  }
}


