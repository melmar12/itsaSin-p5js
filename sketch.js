var k = 5 / 8;

function setup() {
    createCanvas(800, 800);
}

function draw() {
  background(51);
  translate(width/2, height/2);

  beginShape();
  for (var a = 0; a < TWO_PI * 9; a += 0.02) {
    var r = 200 * cos(a*k);
    var x = r * cos(a);
    var y = r * sin(a);
    stroke(255);
    noFill();
    strokeWeight(1);
    vertex(x, y);
  }
  endShape();
}












function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
