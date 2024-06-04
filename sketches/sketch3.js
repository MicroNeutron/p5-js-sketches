function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight)
  background(2)
}

function draw() {
  background(2); 
  
  if(keyIsDown(65)) { // When the user presses the 'A' key
    fill(255, 0, 255); // in Purple color
    triangle(100, 100, 150, 50, 200, 100); //draw a triangle with vertices at (100, 100), (150, 50), and (200,100)
  }
  if(keyIsDown(66)) { // When the user presses the 'B' key
    fill(255, 165, 0); // in Orange color.
    triangle(250, 250, 300, 200, 350, 250); // it will draw a triangle with vertices at (250, 250), (300, 200), and (350,250)
  }
  if(mouseIsPressed) { // When the user clicks the mouse
    fill(255);
    troangle(mouseX, mouseY + 57.3, mouseX - 50, mouseY - 28.9, mouseX + 50， mouseY - 28.9); //draw a triangle centered at the mouse position with verticesforming an equilateral triangle of side length 100
  }
}

/*
the centre of an equilateral triangle is at 2/3 place of any of its median. 
Given that the side length of the equilateral triangle is 100, and the base median is equal to the base side length, 
according to the Pythagorean theorem, the median length is equal to the square root of 100^2 - 50^2, which is approximately 86.6. 
The mouse is positioned 57.3 points below its top vertex. 
The vertical coordinates of the other two vertices are 28.9 below the mouse, 
and the horizontal coordinates are +50 and -50 of the mouse coordinates respectively. 
*/
