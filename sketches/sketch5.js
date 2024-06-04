let colorlist = ['gold', 'yellow', 'turquoise', 'red', 'blue', 'green', 'purple', 'pink', 'orange', 'white'];

function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight);
  background(2);
}

function draw() {
  if (mouseButton === LEFT) { // by clicking the mouse
    fill(random(colorlist)); // Each rectangle should be in a different color
    rect(mouseX, mouseY, 20, 20); // The user should be able to draw multiple small rectangles of width 20 and height 20
  }

  for (let n = 0; n < 10; n++) { // Use a for loop
    fill(random(colorlist)); // Each rectangle should be in a different color
    rect(mouseX + n * 20, mouseY, 20, 20); // to draw 10 rectangles horizontally starting from the position where the mouse is clicked.
  }
}
