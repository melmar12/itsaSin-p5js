function drawCircle(x,y,d) {
  stroke(0);
  noFill();
  ellipse(x,y,d,d);
  if (d > 3) {
    drawCircle(x-d/2, y, d/2);
    drawCircle(x+d/2, y, d/2);
    drawCircle(x, y+d/2, d/2);
  }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  drawCircle(width/2, height/2, 300);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
