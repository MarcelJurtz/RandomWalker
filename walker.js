var x;
var y;



function setup() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  console.log("W: " + width + " - H: " + height);
  createCanvas(width, height);
  background(50);
  x = width / 2;
  y = height / 2;
}

function draw() {
  stroke(255);
  strokeWeight(6);
  point(x,y);

  var r = floor(random(4)); // Min: Default 0
  var inc = 3;

  switch(r) {
    case 0:
      y = y -inc;
      break;
    case 1:
      x = x +inc;
      break;
    case 2:
      y = y +inc;
      break;
    case 3:
      x = x -inc;
      break;
  }

  if(x > width) x = width;
  if(x < 0) x = 0;
  if(y > height) y = height;
  if(y < 0) y = 0;

}
