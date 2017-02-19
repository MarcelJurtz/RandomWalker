var x;
var y;
var walkers = [];


function setup() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  createCanvas(w, h);
  background(50);
  x = w / 2;
  y = h / 2;

  for(var i = 0; i < 5; i++) {
    walkers.push(new Walker());
  }

  for(var i = 0; i < walkers.length; i++) {
    walkers[i].drawPos();
  }
}

function draw() {
  // Hide Scrollbar
  document.body.style.overflow = 'hidden';
  for(var i = 0; i < walkers.length; i++) {
    console.log("for-loop");
    walkers[i].move();
  }
}

function Walker() {
  this.x = random(width);
  this.y = random(height);
  this.weight = 6;

  this.move = function(){
    console.log("Move!");
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

  this.drawPos = function() {
    stroke(255);
    strokeWeight(this.weight);
    point(this.x, this.y);
  };
}
