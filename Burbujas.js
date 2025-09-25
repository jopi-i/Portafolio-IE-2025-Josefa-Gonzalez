let burbujas = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  canvas.style('position','fixed');

  for (let i=0; i<40; i++){
    burbujas.push(new Burbuja());
  }
}

function draw() {
  clear();
  for (let b of burbujas){
    b.mover();
    b.mostrar();
  }
}

class Burbuja {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.r = random(20,50);
    this.vel = random(0.2,1);
    this.color = color(random(100,255), random(150,255), random(100,255),150);
  }

  mover(){
    this.y -= this.vel;
    if(this.y + this.r < 0){
      this.y = height + this.r;
      this.x = random(width);
    }
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < 100){
      this.x += (this.x - mouseX) * 0.05;
      this.y += (this.y - mouseY) * 0.05;
    }
  }

  mostrar(){
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

