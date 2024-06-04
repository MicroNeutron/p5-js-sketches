function setup() {
 createCanvas(windowWidth, windowHeight); //
}

function draw() {
  background(200); 
  
  if(keyIsDown(65)){ // When the user presses the 'A' key
    fill(255, 0, 255); // in Purple color
    triangle(100, 100, 150, 50, 200, 100); //draw a triangle with vertices at (100, 100), (150, 50), and (200,100)
  }
  if(keyIsDown(66)){ // When the user presses the 'B' key
    fill(255, 102, 0); // in Orange color.
    triangle(250, 250, 300, 200, 350, 250); // it will draw a triangle with vertices at (250, 250), (300, 200), and (350,250)
  }
  if(mouseIsPressed){
  
  }
}

/*
the centre of an equilateral triangle is at 2/3 place of any of its median. 
Given that the side length of the equilateral triangle is 100, and the base median is equal to the base side length, 
according to the Pythagorean theorem, the median length is equal to the square root of 100^ 2-50 ^2, which is about 86.6. 
The mouse is positioned approximately 57.3 points below its top vertex. 
The vertical coordinates of the other two vertices are 28.9 below the mouse, 
and the horizontal coordinates are +50 and -50 of the mouse coordinates respectively. 
*/
