// Dimensions of available space
var x;
var y;
// Contains all walkers
var walkers = [];

// Runs once
function setup() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  createCanvas(w, h);
  background(50);

  var walkerAmount = 1;

  for(var i = 0; i < walkerAmount; i++) {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    walkers.push(new Walker(r,g,b, w/2, h/2));
  }

  for(var i = 0; i < walkers.length; i++) {
    walkers[i].drawPos();
  }
}

// Runs every frame
function draw() {
  // Hide Scrollbar
  document.body.style.overflow = 'hidden';
  for(var i = 0; i < walkers.length; i++) {
    for(var j = walkers.length-1; j >= 0; j--) {
      if(walkers[i].intersectsWith(walkers[j]) && i != j) {
        console.log("collision!");
        walkers[i].alpha = 128;
        walkers[j].alpha = 128;
      } else {
        walkers[i].alpha = 255;
        walkers[j].alpha = 255;
      }
    }

    walkers[i].move();
  }
}

// Mouse-Press adds new Walker at mouse-position
function mousePressed() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  walkers.push(new Walker(r,g,b, mouseX, mouseY));
}

// Walker-Object
function Walker(strokeR, strokeG, strokeB, xPos, yPos) {
  this.x = xPos;
  this.y = yPos;
  this.strokeR = strokeR;
  this.strokeG = strokeG;
  this.strokeB = strokeB;
  this.alpha = 255;

  this.weight = 6;

  this.move = function(){
    var r = floor(random(4)); // Min: Default 0
    var inc = 3;

    switch(r) {
      case 0:
        this.y = this.y -inc;
        break;
      case 1:
        this.x = this.x +inc;
        break;
      case 2:
        this.y = this.y +inc;
        break;
      case 3:
        this.x = this.x -inc;
        break;
    }
    if(this.x > window.innerWidth) this.x = window.innerWidth;
    if(this.x < 0) this.x = 0;
    if(this.y > window.innerHeight) this.y = window.innerHeight;
    if(this.y < 0) this.y = 0;
    this.drawPos();
  };

  this.intersectsWith = function(other) {
    if(dist(this.x, this.y, other.x, other.y) < 6) {
      return true;
    } else {
      return false;
    }
  }

  this.drawPos = function() {
    stroke(this.strokeR, this.strokeG, this.strokeB, this.alpha);
    strokeWeight(this.weight);
    point(this.x, this.y);
  };
}
