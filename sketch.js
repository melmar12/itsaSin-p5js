var angle = PI/4;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,20,45);
  // //gradient
  // loadPixels();
  // for (var y = 0; y < height; y++) {
  //   for (var x = 0; x < width; x++) {
  //     var index = (x + y * width)*4;
  //     pixels[index+0] = y;
  //     pixels[index+1] = 60;
  //     pixels[index+2] = 130;
  //   }
  // }
  // updatePixels();

  var len = 100;
  stroke(255,255,255,100);
  translate(width*.85, height);
  branch(100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
    rotate(PI/4);
    branch(len*0.67);
    pop();
    push();
    rotate(-PI/12);
    branch(len*0.67);
    pop();
  }
  if (len = 4) {
    stroke(255, 255, 255, 80);
    line(0, 0, 0, -len);
  }

}
